"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class CardNavigation extends cascade_1.Component {
    render() {
        let { id, className, align } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-nav');
        if (align === 'end') {
            classNames.push('card-nav-align-end');
        }
        return (cascade_1.default.createElement("nav", { className: classNames.join(' '), id: id }, this.children));
    }
}
exports.default = CardNavigation;
//# sourceMappingURL=CardNavigation.js.map