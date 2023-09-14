"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Row extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        if (!this.props.reverse) {
            classNames.push('row');
        }
        else {
            classNames.push('row-reverse');
        }
        let className = classNames.join(' ');
        return cascade_1.default.createElement("div", { className: className, id: this.props.id }, this.children);
    }
}
exports.default = Row;
//# sourceMappingURL=Row.js.map