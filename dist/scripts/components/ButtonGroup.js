"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class ButtonGroups extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('button-group');
        if (this.props.fill) {
            classNames.push('fill-width');
        }
        return cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id }, this.children);
    }
}
exports.default = ButtonGroups;
//# sourceMappingURL=ButtonGroup.js.map