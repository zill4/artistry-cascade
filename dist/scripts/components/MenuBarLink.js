"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class MenuBarLink extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('menu-link');
        if (this.props.active) {
            classNames.push('menu-active');
        }
        return (cascade_1.default.createElement("li", { className: classNames.join(' '), id: this.props.id }, this.props.href ?
            cascade_1.default.createElement("a", { href: this.props.href }, this.props.title) :
            cascade_1.default.createElement("span", null, this.props.title)));
    }
}
exports.default = MenuBarLink;
//# sourceMappingURL=MenuBarLink.js.map