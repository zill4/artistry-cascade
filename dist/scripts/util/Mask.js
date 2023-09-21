"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardMovement = exports.ValidCharacter = exports.MaskUnit = exports.UnitValid = void 0;
const diff_1 = require("@cascade/diff");
var UnitValid;
(function (UnitValid) {
    UnitValid[UnitValid["valid"] = 1] = "valid";
    UnitValid[UnitValid["invalid"] = 0] = "invalid";
    UnitValid[UnitValid["incomplete"] = -1] = "incomplete";
})(UnitValid || (exports.UnitValid = UnitValid = {}));
class MaskUnit {
    constructor(type, definition) {
        this.type = type;
        this.definition = definition;
        this.mask = MaskUnit.getMask(this.type, this.definition);
    }
    fill(value) {
        this.value = value.substring(0, this.mask.length);
        return value.substring(this.mask.length);
    }
    isValid() {
        if (this.value) {
            let clean = this.value.replace(/[\W_]+/g, "");
            if (clean.length < this.mask.length) {
                return UnitValid.incomplete;
            }
            else {
                if (this.type === UnitTypes.range) {
                    return MaskUnit.isRangeValid(this.definition, this.value) ? UnitValid.valid : UnitValid.invalid;
                }
                else {
                    return UnitValid.valid;
                }
            }
        }
        else {
            return UnitValid.incomplete;
        }
    }
    static isRangeValid(definition, value) {
        let parts = definition.split('-');
        if (parts && parts.length > 1) {
            let top = parseInt(parts[1] || parts[0]);
            let bottom = parseInt(parts[0]) || 0;
            let valueNumber = parseInt(value);
            if (bottom <= valueNumber && valueNumber <= top) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static getMask(type, definition) {
        switch (type) {
            case UnitTypes.numeric:
                return '9';
            case UnitTypes.alpha:
                return 'a';
            case UnitTypes.alphanumeric:
                return 'n';
            case UnitTypes.hexidecimal:
                return '0';
            case UnitTypes.escaped:
                return '*';
            case UnitTypes.range:
                return MaskUnit.getRangeMask(definition);
                break;
        }
    }
    static getRangeMask(definition) {
        let parts = definition.split('-');
        if (parts && parts.length > 1) {
            let top = parts[1] || parts[0];
            let characters = [];
            for (let index = 0, length = top.length; index < length; index++) {
                characters.push('9');
            }
            return characters.join('');
        }
        else {
            return '';
        }
    }
}
exports.MaskUnit = MaskUnit;
class Mask {
    constructor(mask) {
        this.parse(mask);
    }
    parse(mask) {
        this.units = [];
        if (mask) {
            mask.replace(regex, (substring, numeric, alpha, alphanumeric, hexidecimal, escaped, range) => {
                if (numeric) {
                    let unit = new MaskUnit(UnitTypes.numeric, numeric);
                    this.units.push(unit);
                }
                else if (alpha) {
                    let unit = new MaskUnit(UnitTypes.alpha, alpha);
                    this.units.push(unit);
                }
                else if (alphanumeric) {
                    let unit = new MaskUnit(UnitTypes.alphanumeric, alphanumeric);
                    this.units.push(unit);
                }
                else if (hexidecimal) {
                    let unit = new MaskUnit(UnitTypes.hexidecimal, hexidecimal);
                    this.units.push(unit);
                }
                else if (escaped) {
                    let unit = new MaskUnit(UnitTypes.escaped, escaped);
                    this.units.push(unit);
                }
                else if (range) {
                    let unit = new MaskUnit(UnitTypes.range, range);
                    this.units.push(unit);
                }
                return substring;
            });
        }
        let cleanMask = this.units.map(unit => unit.mask).join('');
        mask = mask.replace(new RegExp(UnitRegexes.range, 'g'), (searchValue, range) => {
            return MaskUnit.getRangeMask(range);
        });
        var output = '';
        var cleanIndex = 0;
        for (var index = 0, length = mask.length; index < length; index++) {
            var character = mask[index];
            if (Mask.isValidCharacter(character)) {
                output += cleanMask[cleanIndex] || ' ';
                cleanIndex++;
            }
            else {
                output += character;
            }
        }
        this.mask = output;
        return output;
    }
    fill(value) {
        let remainder = value;
        this.units.forEach(unit => {
            remainder = unit.fill(remainder);
        });
        return remainder;
    }
    isValid() {
        for (let unit of this.units) {
            if (unit.isValid() === UnitValid.invalid) {
                return false;
            }
        }
        return true;
    }
    getVirtualPosition(position) {
        position = Math.min(position, this.mask.length);
        var valuePosition = 0;
        for (var index = 0; index < position; index++) {
            var character = this.mask[index];
            if (Mask.isValidCharacter(character)) {
                valuePosition++;
            }
        }
        return valuePosition;
    }
    getMaskPosition(position) {
        var valueIndex = 0;
        for (var index = 0, length = this.mask.length; index < length; index++) {
            var character = this.mask[index];
            if (Mask.isValidCharacter(character)) {
                valueIndex++;
                if (valueIndex > position) {
                    break;
                }
            }
        }
        return index;
    }
    getVirtualSelection(selection) {
        return {
            start: this.getVirtualPosition(selection.start),
            end: this.getVirtualPosition(selection.end),
            direction: selection.direction
        };
    }
    formatClean(clean, allowLessValid = false) {
        let cleanMask = Mask.cleanValue(this.mask);
        let diff = diff_1.default.compare(cleanMask.split('').reverse().join(''), clean.split('').reverse().join(''), compareChars);
        let lcs = createLCS(diff);
        if (!allowLessValid && lcs.length < clean.length) {
            throw 'Invalid Value';
        }
        let cleanSpaces = createSpaces(diff);
        this.fill(cleanSpaces);
        if (!this.isValid()) {
            throw 'Invalid Value';
        }
        var output = '';
        var cleanIndex = 0;
        for (var index = 0, length = this.mask.length; index < length; index++) {
            var character = this.mask[index];
            if (Mask.isValidCharacter(character)) {
                output += cleanSpaces[cleanIndex] || ' ';
                cleanIndex++;
            }
            else {
                output += character;
            }
        }
        return output;
    }
    formatValue(value, allowLessValid = false) {
        let clean = Mask.cleanValue(value);
        return this.formatClean(clean, allowLessValid);
    }
    updateSelection(value, selection, keyboardMovement = KeyboardMovement.none) {
        let clean = Mask.cleanValueWithSpaces(value);
        let virtualSelection = this.getVirtualSelection(selection);
        let selectionStart;
        let selectionEnd;
        switch (keyboardMovement) {
            case KeyboardMovement.none:
                selectionStart = this.getMaskPosition(Math.min(clean.length, virtualSelection.start));
                selectionEnd = this.getMaskPosition(Math.min(clean.length, virtualSelection.end));
                break;
            case KeyboardMovement.home:
                selectionStart = this.getMaskPosition(0);
                selectionEnd = selectionStart;
                break;
            case KeyboardMovement.end:
                selectionStart = this.getMaskPosition(clean.length);
                selectionEnd = selectionStart;
                break;
            case KeyboardMovement.left:
                selectionStart = this.getMaskPosition(virtualSelection.start - 1);
                selectionEnd = selectionStart;
                break;
            case KeyboardMovement.right:
                selectionStart = this.getMaskPosition(Math.min(clean.length, virtualSelection.start + 1));
                selectionEnd = selectionStart;
                break;
        }
        return {
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
        };
    }
    updateValue(value, oldValue) {
        value = this.formatValue(value);
        let diff = diff_1.default.compare(oldValue, value);
        diff.reverse();
        let position = 0;
        for (let index = 0, length = diff.length; index < length; index++) {
            let diffItem = diff[index];
            if (diffItem.operation === -1) {
            }
            if (diffItem.operation === 0) {
                position++;
            }
            if (diffItem.operation === 1) {
                position++;
                break;
            }
        }
        let virtualPosition = this.getVirtualPosition(position);
        let selectionPosition = this.getMaskPosition(virtualPosition);
        return {
            value: value,
            selectionStart: selectionPosition,
            selectionEnd: selectionPosition
        };
    }
    deleteCharacter(value, selection, forward) {
        let clean = Mask.cleanValueWithSpaces(value);
        let virtualSelection = this.getVirtualSelection(selection);
        if (virtualSelection.start === virtualSelection.end) {
            let updatedClean = forward ?
                clean.slice(0, virtualSelection.start) + clean.slice(virtualSelection.end + 1) :
                clean.slice(0, virtualSelection.start - 1) + clean.slice(virtualSelection.end);
            let updatedValue = this.formatClean(updatedClean, true);
            let selectionPosition = this.getMaskPosition(forward ? virtualSelection.start : (virtualSelection.start - 1));
            return {
                value: updatedValue,
                selectionStart: selectionPosition,
                selectionEnd: selectionPosition
            };
        }
        else {
            let updatedClean = clean.slice(0, virtualSelection.start) + clean.slice(virtualSelection.end);
            let updatedValue = this.formatClean(updatedClean, true);
            let selectionPosition = this.getMaskPosition(Math.min(updatedClean.length, virtualSelection.start));
            return {
                value: updatedValue,
                selectionStart: selectionPosition,
                selectionEnd: selectionPosition
            };
        }
    }
    static cleanValue(value) {
        if (typeof value === 'string') {
            return value.replace(/[\W_]+/g, "");
        }
        else {
            return '';
        }
    }
    static cleanValueWithSpaces(value) {
        if (typeof value === 'string') {
            let clean = value.replace(/[\W]+/g, "");
            let length = clean.replace(/[_]/g, ' ').trim().length;
            return clean.substring(0, length);
        }
        else {
            return '';
        }
    }
    static isValidCharacter(character, placeholder = false) {
        switch (character) {
            case ValidCharacter.number:
            case ValidCharacter.alpha:
            case ValidCharacter.alphanumeric:
            case ValidCharacter.hexadecimal:
                return true;
            case ValidCharacter.placeholder:
                if (placeholder) {
                    return true;
                }
                else {
                    return false;
                }
            default:
                return false;
        }
    }
}
exports.default = Mask;
var UnitTypes;
(function (UnitTypes) {
    UnitTypes["numeric"] = "numeric";
    UnitTypes["alpha"] = "alpha";
    UnitTypes["alphanumeric"] = "alphanumeric";
    UnitTypes["hexidecimal"] = "hexidecimal";
    UnitTypes["escaped"] = "escaped";
    UnitTypes["range"] = "range";
})(UnitTypes || (UnitTypes = {}));
var UnitRegexes;
(function (UnitRegexes) {
    UnitRegexes["numeric"] = "(9)";
    UnitRegexes["alpha"] = "(a)";
    UnitRegexes["alphanumeric"] = "(n)";
    UnitRegexes["hexidecimal"] = "(0)";
    UnitRegexes["escaped"] = "(\\\\.)";
    UnitRegexes["range"] = "\\[\\[([^\\[\\]]*)\\]\\]";
})(UnitRegexes || (UnitRegexes = {}));
let regex = new RegExp([
    UnitRegexes.numeric,
    UnitRegexes.alpha,
    UnitRegexes.alphanumeric,
    UnitRegexes.hexidecimal,
    UnitRegexes.escaped,
    UnitRegexes.range
].join('|'), 'g');
var ValidCharacter;
(function (ValidCharacter) {
    ValidCharacter["placeholder"] = "_";
    ValidCharacter["alpha"] = "a";
    ValidCharacter["number"] = "9";
    ValidCharacter["alphanumeric"] = "n";
    ValidCharacter["hexadecimal"] = "0";
})(ValidCharacter || (exports.ValidCharacter = ValidCharacter = {}));
var KeyboardMovement;
(function (KeyboardMovement) {
    KeyboardMovement[KeyboardMovement["none"] = 0] = "none";
    KeyboardMovement[KeyboardMovement["home"] = 1] = "home";
    KeyboardMovement[KeyboardMovement["end"] = 2] = "end";
    KeyboardMovement[KeyboardMovement["left"] = 3] = "left";
    KeyboardMovement[KeyboardMovement["right"] = 4] = "right";
})(KeyboardMovement || (exports.KeyboardMovement = KeyboardMovement = {}));
function compareChars(maskChar, valueChar) {
    switch (maskChar) {
        case '9':
            return !!valueChar.match(/[0-9]/);
        case 'a':
            return !!valueChar.match(/[a-zA-Z ]/);
        case 'n':
            return !!valueChar.match(/[0-9a-zA-Z ]/);
        case '0':
            return !!valueChar.match(/[0-9a-fA-F ]/);
    }
}
function createLCS(diff) {
    var lcs = [];
    for (var index = 0, length = diff.length; index < length; index++) {
        var diffItem = diff[index];
        switch (diffItem.operation) {
            case diff_1.DiffOperation.ADD:
                break;
            case diff_1.DiffOperation.NONE:
                lcs.push(diffItem.item);
                break;
            case diff_1.DiffOperation.REMOVE:
                break;
        }
    }
    return lcs.join('');
}
function createSpaces(diff) {
    var lcs = [];
    for (var index = 0, length = diff.length; index < length; index++) {
        var diffItem = diff[index];
        switch (diffItem.operation) {
            case diff_1.DiffOperation.ADD:
                break;
            case diff_1.DiffOperation.NONE:
                lcs.push(diffItem.itemB);
                break;
            case diff_1.DiffOperation.REMOVE:
                lcs.push('_');
                break;
        }
    }
    return lcs.join('');
}
//# sourceMappingURL=Mask.js.map