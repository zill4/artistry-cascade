"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class ScrollableView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.bottom = async () => {
            console.log('bottom!');
        };
    }
    render() {
        let values = [];
        for (let index = 0; index < 100; index++) {
            values.push(index);
        }
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Scrollable", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Scrollable, { type: "y", height: "200px", bumper: 10, onBottomEnter: this.bottom },
                cascade_1.default.createElement(ArtistryCascade_1.CardContainer, { space: true }, values.map((value, index) => cascade_1.default.createElement(ArtistryCascade_1.Card, { key: index, header: "Card", space: true }, value))))));
    }
}
exports.default = ScrollableView;
//# sourceMappingURL=ScrollableView.js.map