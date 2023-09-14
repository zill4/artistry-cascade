"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const MaskedInput_1 = require("./MaskedInput");
class Input extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.oninput = (event) => {
            let { number, model, modelProp } = this.props;
            if (model && modelProp) {
                let value = event.target.value;
                if (number) {
                    value = parseFloat(value);
                }
                model[modelProp] = value;
            }
            if (this.props.oninput) {
                this.props.oninput(event);
            }
        };
    }
    render() {
        let _a = this.props, { id, className, value, number, fill, mask, model, modelProp, displaySize, oninput } = _a, props = __rest(_a, ["id", "className", "value", "number", "fill", "mask", "model", "modelProp", "displaySize", "oninput"]);
        let renderedValue;
        if (model && modelProp) {
            renderedValue = model[modelProp];
        }
        else {
            renderedValue = value;
        }
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('input');
        if (fill) {
            classNames.push('fill-width');
        }
        let _displaySize;
        switch (displaySize) {
            case 'small':
                _displaySize = 'input-small';
                break;
            case 'large':
                _displaySize = 'input-large';
                break;
        }
        if (mask) {
            return (cascade_1.default.createElement(MaskedInput_1.default, Object.assign({ id: id, className: classNames.join(' '), "data-size": _displaySize, value: renderedValue, oninput: oninput || this.oninput, mask: mask }, props)));
        }
        else {
            return (cascade_1.default.createElement("input", Object.assign({ id: id, className: classNames.join(' '), "data-size": _displaySize, value: renderedValue, oninput: oninput || this.oninput }, props)));
        }
    }
}
exports.default = Input;
//# sourceMappingURL=Input.js.map