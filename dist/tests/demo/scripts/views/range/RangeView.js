"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class RangeView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Range", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Range, null)));
    }
}
exports.default = RangeView;
//# sourceMappingURL=RangeView.js.map