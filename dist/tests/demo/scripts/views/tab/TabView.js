"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class TabView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Tab", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Tab, { titles: ['Tab 1', 'Tab 2', 'Tab 3'], animated: true, space: true },
                cascade_1.default.createElement("div", null,
                    "Tab 1 Content",
                    cascade_1.default.createElement("br", null),
                    cascade_1.default.createElement("input", { type: "text", className: "input" })),
                cascade_1.default.createElement("div", null,
                    "Tab 2 Content",
                    cascade_1.default.createElement("br", null),
                    "More Content",
                    cascade_1.default.createElement("br", null),
                    cascade_1.default.createElement("input", { type: "text", className: "input" })),
                cascade_1.default.createElement("div", null,
                    "Tab 3 Content",
                    cascade_1.default.createElement("br", null),
                    "Event more Content",
                    cascade_1.default.createElement("br", null),
                    "Another line of Content",
                    cascade_1.default.createElement("br", null),
                    cascade_1.default.createElement("input", { type: "text", className: "input" })))));
    }
}
exports.default = TabView;
//# sourceMappingURL=TabView.js.map