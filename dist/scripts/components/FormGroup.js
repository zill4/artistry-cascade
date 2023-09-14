"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
const FormText_1 = require("./FormText");
class FormGroup extends cascade_1.Component {
    render() {
        let classNames = new ClassNames_1.default(this.props.className, 'form-group');
        classNames.addTest('form-group-inline', this.props.inline);
        let input = (cascade_1.default.createElement("div", { className: "form-input" }, this.children));
        let label;
        if (this.props.label) {
            if (this.props.nonLabel) {
                label = (cascade_1.default.createElement("div", { className: "form-title" }, this.props.label));
            }
            else {
                label = (cascade_1.default.createElement("label", { className: "form-title" }, this.props.label));
            }
        }
        return (cascade_1.default.createElement("div", { className: classNames.toString(), id: this.props.id },
            label,
            input,
            this.props.text ?
                cascade_1.default.createElement(FormText_1.default, { theme: this.props.theme, align: this.props.textAlign }, this.props.text) :
                null));
    }
}
exports.default = FormGroup;
//# sourceMappingURL=FormGroup.js.map