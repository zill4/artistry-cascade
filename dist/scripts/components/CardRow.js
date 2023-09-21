"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const Align_1 = require("../util/Align");
const ClassNames_1 = require("../util/ClassNames");
class CardRow extends cascade_1.Component {
    render() {
        let { id, className, align } = this.props;
        let classNames = new ClassNames_1.default(className, 'card-row');
        if (align) {
            (0, Align_1.alignClass)(align, classNames);
        }
        return (cascade_1.default.createElement("div", { className: classNames.toString(), id: id }, this.children));
    }
}
exports.default = CardRow;
//# sourceMappingURL=CardRow.js.map