"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Select extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            let { data, onChange, model, modelProp, valueProp } = this.props;
            if (model && modelProp) {
                let value = event.target.value;
                model[modelProp] = value;
            }
            if (onChange) {
                let value = event.target.value;
                if (valueProp) {
                    let option = data.find(option => option[valueProp] == value);
                    onChange(option, event);
                }
                else {
                    let option = data.find(option => option == value);
                    onChange(option, event);
                }
            }
        };
    }
    render() {
        let { id, className, data, template, value, valueProp, model, modelProp, allowEmpty, emptyValue } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('input');
        if (model && modelProp) {
            value = model[modelProp];
        }
        let emptyOption = undefined;
        if (allowEmpty) {
            let emptyString = undefined;
            switch (typeof emptyValue) {
                case 'object':
                    if (emptyValue) {
                        let prop = emptyValue[valueProp];
                        if (prop) {
                            emptyString = prop.toString();
                        }
                    }
                    break;
                case 'string':
                    emptyString = emptyValue;
                    break;
                case 'number':
                    emptyString = emptyValue.toString();
                    break;
            }
            emptyOption = (cascade_1.default.createElement("option", { key: "_empty_option", value: emptyString }));
        }
        return (cascade_1.default.createElement("select", { id: id, className: classNames.join(' '), value: value ? value.toString() : undefined, onChange: this.onChange },
            emptyOption,
            template ?
                data.map(template) :
                data.map(option => {
                    if (valueProp) {
                        let optionValue = option[valueProp];
                        return (cascade_1.default.createElement("option", { key: optionValue, value: optionValue }, optionValue));
                    }
                    else {
                        return (cascade_1.default.createElement("option", { key: option, value: option }, option));
                    }
                })));
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map