"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class ToggleView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Toggle", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Toggle, null)));
    }
}
exports.default = ToggleView;
//# sourceMappingURL=ToggleView.js.map