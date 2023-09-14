"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Range extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement("input", Object.assign({ type: "range", className: "range" }, this.props)));
    }
}
exports.default = Range;
//# sourceMappingURL=Range.js.map