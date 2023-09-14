"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class ActionBar extends cascade_1.Component {
    render() {
        let { id, className, direction, align, displaySize } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('action-bar');
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: id, "data-direction": direction, "data-align": align, "data-size": displaySize }, this.children));
    }
}
exports.default = ActionBar;
//# sourceMappingURL=ActionBar.js.map