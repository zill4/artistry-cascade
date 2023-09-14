"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const Sortable_1 = require("../../../../../scripts/components/Sortable");
class SortableView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(Sortable_1.default, { items: [1] }));
    }
}
exports.default = SortableView;
//# sourceMappingURL=SortableView.js.map