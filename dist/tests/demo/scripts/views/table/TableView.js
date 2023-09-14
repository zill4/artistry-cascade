"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
let data = [{
        ingredient: 'Potato',
        quantity: '8 - 10',
        unit: 'potato'
    }, {
        ingredient: 'Salt',
        quantity: 1,
        unit: 'teaspoon'
    }, {
        ingredient: 'Butter',
        quantity: '2',
        unit: 'tablespoon'
    }, {
        ingredient: 'Pepper',
        quantity: 1,
        unit: 'dash'
    }, {
        ingredient: 'Hot Milk',
        quantity: '1/4',
        unit: 'cup'
    }];
class TableView extends cascade_1.Component {
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Table", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Table, { id: "table-component", data: data, columns: [{
                        header: 'Ingredient',
                        property: 'ingredient'
                    }, {
                        header: 'Quantity',
                        property: 'quantity',
                        template: item => cascade_1.default.createElement("td", null,
                            cascade_1.default.createElement("strong", null, item.quantity))
                    }, {
                        header: 'Unit',
                        property: 'unit'
                    }] })));
    }
}
exports.default = TableView;
//# sourceMappingURL=TableView.js.map