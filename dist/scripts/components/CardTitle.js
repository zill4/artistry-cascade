"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class CardTitle extends cascade_1.Component {
    render() {
        let { id, className } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-title');
        return (cascade_1.default.createElement("header", { className: classNames.join(' '), id: id }, this.children));
    }
}
exports.default = CardTitle;
//# sourceMappingURL=CardTitle.js.map