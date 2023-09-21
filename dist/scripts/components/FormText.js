"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
const Align_1 = require("../util/Align");
class FormText extends cascade_1.Component {
    render() {
        let { id, className, fill, theme, align } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('form-text');
        if (fill) {
            classNames.add('fill');
        }
        if (align) {
            (0, Align_1.alignClass)(align, classNames);
        }
        let _theme;
        switch (theme) {
            case 'success':
                _theme = 'success';
                break;
            case 'info':
                _theme = 'info';
                break;
            case 'warning':
                _theme = 'warning';
                break;
            case 'danger':
                _theme = 'danger';
                break;
        }
        return (cascade_1.default.createElement("div", { className: classNames.toString(), id: id, "data-theme": _theme }, this.children));
    }
}
exports.default = FormText;
//# sourceMappingURL=FormText.js.map