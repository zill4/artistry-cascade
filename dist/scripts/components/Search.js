"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const DepthStack_1 = require("../util/DepthStack");
const Button_1 = require("./Button");
class Search extends cascade_1.Component {
    constructor(props, children) {
        super(props, children);
        this.activeOption = -1;
        this.onKeyDown = (event) => {
            let { value, options } = this;
            let activeOption;
            switch (event.keyCode) {
                case 13:
                    this.onSearch(event);
                    break;
                case 27:
                    this.onClose(event);
                    break;
                case 38:
                    event.preventDefault();
                    if (!value || !value.trim()) {
                        activeOption = -1;
                    }
                    else {
                        activeOption = this.activeOption;
                        activeOption--;
                        if (activeOption < -1) {
                            activeOption = -1;
                        }
                    }
                    if (activeOption !== -1) {
                        this.activeOption = activeOption;
                        this.value = options[activeOption];
                    }
                    else {
                        this.activeOption = activeOption;
                    }
                    break;
                case 40:
                    event.preventDefault();
                    if (!value || !value.trim()) {
                        activeOption = -1;
                    }
                    else {
                        activeOption = this.activeOption;
                        activeOption++;
                        if (activeOption >= options.length) {
                            activeOption = options.length - 1;
                        }
                    }
                    if (activeOption !== -1) {
                        this.activeOption = activeOption;
                        this.value = options[activeOption];
                    }
                    else {
                        this.activeOption = activeOption;
                    }
                    break;
            }
        };
        this.oninput = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event);
            }
        };
        this.onSearch = (event) => {
            if (this.props.onSearch) {
                this.props.onSearch(event, this.value);
            }
        };
        this.onClear = (event) => {
            if (this.props.onClear) {
                this.props.onClear(event);
            }
        };
        let { value, options } = this.props;
        this.options = this.cleanOptions(options, value);
    }
    cleanOptions(options, value) {
        if (value && value.trim) {
            options = options ? options.slice(0) : [];
            options.unshift(value);
        }
        else {
            options = options || [];
        }
        return options;
    }
    onSelectOption(option, index, event) {
        this.activeOption = index;
        this.value = option;
        if (this.props.onSelectOption) {
            this.props.onSelectOption(event, option);
        }
    }
    onClose(event) {
        if (this.props.onClose) {
            this.props.onClose(event);
        }
    }
    afterProps(updating) {
        let { value, options, showOptions } = this.props;
        options = this.cleanOptions(options, value);
        this.value = value;
        this.options = options;
        if (value !== this.props.value) {
            this.activeOption = -1;
        }
        if (!updating) {
            if (!this.closeHandle) {
                this.closeHandle = this.onClose.bind(this);
            }
            if (this.props.showOptions) {
                DepthStack_1.default.push(this.closeHandle);
            }
        }
        else {
            if (showOptions !== this.props.showOptions) {
                if (showOptions) {
                    DepthStack_1.default.push(this.closeHandle);
                }
                else {
                    DepthStack_1.default.remove(this.closeHandle);
                }
            }
        }
    }
    afterDispose() {
        if (this.props.showOptions) {
            DepthStack_1.default.remove(this.closeHandle);
        }
    }
    render() {
        let _a = this.props, { id, className, buttonText, altAction, altActionText, showOptions, fill, disabled, disabledButton, disabledInput, screenSize, showClear, clearText, value: _value, options: _options, onChange, onSelectOption, onSearch, onClear, onClose } = _a, buttonProps = __rest(_a, ["id", "className", "buttonText", "altAction", "altActionText", "showOptions", "fill", "disabled", "disabledButton", "disabledInput", "screenSize", "showClear", "clearText", "value", "options", "onChange", "onSelectOption", "onSearch", "onClear", "onClose"]);
        let { value, options, activeOption } = this;
        let classNames = className ? [className] : [];
        classNames.push('search');
        let open = undefined;
        if (options.length && !disabled && !disabledInput && showOptions) {
            open = "true";
        }
        let inputClassNames = ['input', 'search-input'];
        if (fill) {
            inputClassNames.push('fill-width');
        }
        switch (screenSize) {
            case 'x-small':
                classNames.push('search-xs');
                break;
            case 'small':
                classNames.push('search-sm');
                break;
            case 'medium':
                classNames.push('search-md');
                break;
            case 'large':
                classNames.push('search-lg');
                break;
            case 'x-large':
                classNames.push('search-xl');
                break;
        }
        return (cascade_1.default.createElement("div", { id: id, className: classNames.join(' '), "data-open": open },
            cascade_1.default.createElement("div", { className: "button-group search-button-group" },
                cascade_1.default.createElement("input", { className: inputClassNames.join(' '), onkeydown: this.onKeyDown, oninput: this.oninput, value: value || '', disabled: disabled || disabledInput }),
                showClear && onClear ?
                    cascade_1.default.createElement(Button_1.default, { className: "search-button", onClick: this.onClear, disabled: !value }, clearText || 'Clear') :
                    undefined,
                cascade_1.default.createElement(Button_1.default, Object.assign({ className: "search-button", onclick: this.onSearch, disabled: disabled || disabledButton }, buttonProps), buttonText || 'Search')),
            cascade_1.default.createElement("div", { className: "search-option-box" },
                cascade_1.default.createElement("ul", { role: "listbox", className: "search-option-list" }, !options ? undefined : options.map((option, index) => {
                    let optionClassName = ['search-option'];
                    if (index === activeOption) {
                        optionClassName.push('search-option-active');
                    }
                    return (cascade_1.default.createElement("li", { className: optionClassName.join(' '), role: "presentation", key: option + '_' + index },
                        cascade_1.default.createElement("div", { className: "search-option-action", role: "option", onclick: this.onSelectOption.bind(this, option, index) },
                            cascade_1.default.createElement("div", { className: "search-option-action-text" },
                                cascade_1.default.createElement("span", null,
                                    cascade_1.default.createElement("b", null, option)))),
                        altAction && altActionText ?
                            cascade_1.default.createElement("div", { className: "search-option-alt-action", onclick: altAction.bind(this, option) },
                                cascade_1.default.createElement("div", { className: "search-option-alt-action-text" }, altActionText)) :
                            undefined));
                })))));
    }
}
exports.default = Search;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Search.prototype, "activeOption", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Search.prototype, "value", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Array)
], Search.prototype, "options", void 0);
//# sourceMappingURL=Search.js.map