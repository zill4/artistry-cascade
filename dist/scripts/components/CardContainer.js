"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class CardContainer extends cascade_1.Component {
    render() {
        let { id, className, space, minWidth, maxWidth } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-container');
        if (space) {
            classNames.push('space');
        }
        if (minWidth && typeof minWidth === 'number') {
            minWidth += 'px';
        }
        if (maxWidth && typeof maxWidth === 'number') {
            maxWidth += 'px';
        }
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: id, style: {
                '--card-min-width': minWidth,
                '--card-max-width': maxWidth
            } }, this.children));
    }
}
exports.default = CardContainer;
//# sourceMappingURL=CardContainer.js.map