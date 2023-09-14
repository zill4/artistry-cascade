"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const Draggable_1 = require("./Draggable");
class Sortable extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement("div", null, this.props.items.map((item) => {
            cascade_1.default.createElement(Draggable_1.default, { item: item });
        })));
    }
}
exports.default = Sortable;
//# sourceMappingURL=Sortable.js.map