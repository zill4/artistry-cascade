"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class GridView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Grid", headerSpace: true },
            cascade_1.default.createElement("h3", null, "Grid"),
            cascade_1.default.createElement(ArtistryCascade_1.Grid, { screenSize: "small", space: true },
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Item 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Item 2"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Item 3")),
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 12 }, "Item 1")),
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 6 }, "Item 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 6 }, "Item 2")),
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 4 }, "Item 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 4 }, "Item 2"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 4 }, "Item 3")),
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 3 }, "Item 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 3 }, "Item 2"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 3 }, "Item 3"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 3 }, "Item 4")),
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 1, offset: 1 }, "Item 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 3, offset: 2 }, "Item 2"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 1 }, "Item 3"),
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, { columns: 1 }, "Item 4")))));
    }
}
exports.default = GridView;
//# sourceMappingURL=GridView.js.map