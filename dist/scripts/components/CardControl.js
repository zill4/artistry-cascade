"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
class CardControl extends cascade_1.Component {
    render() {
        let { id, className, title, label, width, stacked } = this.props;
        let classNames = new ClassNames_1.default(className, 'card-control');
        classNames.addTest('card-control-stacked', stacked);
        if (width && typeof width === 'number') {
            width += 'px';
        }
        if (label) {
            return (cascade_1.default.createElement("label", { className: classNames.toString(), id: id, style: { '--card-control-min-width': width } },
                cascade_1.default.createElement("div", { className: "card-control-title" }, title),
                cascade_1.default.createElement("div", { className: "card-control-data" }, this.children)));
        }
        else {
            return (cascade_1.default.createElement("div", { className: classNames.toString(), id: id, style: { '--card-control-min-width': width } },
                cascade_1.default.createElement("div", { className: "card-control-title" }, title),
                cascade_1.default.createElement("div", { className: "card-control-data" }, this.children)));
        }
    }
}
exports.default = CardControl;
//# sourceMappingURL=CardControl.js.map