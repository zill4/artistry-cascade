"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
class CardSection extends cascade_1.Component {
    render() {
        let { id, className, multiColumn, centered } = this.props;
        let classNames = new ClassNames_1.default(className, 'card-section');
        classNames.addTest('card-section-multi-column', multiColumn);
        classNames.addTest('card-section-centered', centered);
        return (cascade_1.default.createElement("section", { className: classNames.toString(), id: id }, this.children));
    }
}
exports.default = CardSection;
//# sourceMappingURL=CardSection.js.map