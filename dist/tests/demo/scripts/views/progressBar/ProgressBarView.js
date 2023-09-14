"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class ProgressBarView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Progress Bar", space: true, headerSpace: true },
            cascade_1.default.createElement("h3", null, "Default"),
            cascade_1.default.createElement(ArtistryCascade_1.ProgressBar, { value: 50, min: 0, max: 100, decimal: 2, decimalFixed: true, showPercentage: true }),
            cascade_1.default.createElement("h3", null, "Success"),
            cascade_1.default.createElement(ArtistryCascade_1.ProgressBar, { value: 50, min: 0, max: 100, decimal: 2, decimalFixed: true, showPercentage: true, type: "success" })));
    }
}
exports.default = ProgressBarView;
//# sourceMappingURL=ProgressBarView.js.map