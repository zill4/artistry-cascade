"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class TabTitle extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.selectPanel = (event) => {
            if (this.props.onSelectPanel) {
                return this.props.onSelectPanel(event);
            }
        };
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('tab-title');
        if (this.props.active) {
            classNames.push('tab-active');
        }
        return (cascade_1.default.createElement("li", { className: classNames.join(' '), id: this.props.id },
            cascade_1.default.createElement("a", { onclick: this.selectPanel }, this.props.title)));
    }
}
exports.default = TabTitle;
//# sourceMappingURL=TabTitle.js.map