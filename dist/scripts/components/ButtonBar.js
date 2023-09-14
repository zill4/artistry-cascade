"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class ButtonBar extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('button-bar');
        let className = classNames.join(' ');
        return cascade_1.default.createElement("div", { className: className, id: this.props.id }, this.children);
    }
}
exports.default = ButtonBar;
//# sourceMappingURL=ButtonBar.js.map