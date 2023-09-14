"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
class Spacer extends cascade_1.Component {
    render() {
        let { className, id, list } = this.props;
        let classNames = new ClassNames_1.default(className, 'spacer');
        if (list) {
            return (cascade_1.default.createElement("li", { className: classNames.toString(), id: id }));
        }
        else {
            return (cascade_1.default.createElement("div", { className: classNames.toString(), id: id }));
        }
    }
}
exports.default = Spacer;
//# sourceMappingURL=Spacer.js.map