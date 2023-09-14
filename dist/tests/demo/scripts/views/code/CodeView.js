"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class CodeView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Code", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Code, null, '\
window.onload = function() {\r\n\
    console.log(\'started...\');\r\n\
}\
            ')));
    }
}
exports.default = CodeView;
//# sourceMappingURL=CodeView.js.map