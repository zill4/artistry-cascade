"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const Portal_1 = require("../util/Portal");
class MenuBar extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.container = document.createElement('div');
    }
    onOpen(event) {
        event.preventDefault();
        if (this.props.onOpen) {
            this.props.onOpen(event);
        }
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('menu-bar');
        if (this.props.top) {
            classNames.push('menu-bar-top');
        }
        if (this.props.open) {
            classNames.push('menu-bar-open');
        }
        let menuBarTitle;
        if (this.props.title) {
            menuBarTitle = (cascade_1.default.createElement("div", { className: "menu-bar-title" }, this.props.title));
        }
        return (cascade_1.default.createElement(cascade_1.Portal, { element: Portal_1.default.getElement('layer-fixed') },
            cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id },
                this.props.top ? cascade_1.default.createElement("div", { className: "menu-bar-expander" },
                    cascade_1.default.createElement("a", { href: "#", onclick: this.onOpen.bind(this) }, "\u2630")) : undefined,
                menuBarTitle,
                cascade_1.default.createElement("ul", null, this.children))));
    }
}
exports.default = MenuBar;
//# sourceMappingURL=MenuBar.js.map