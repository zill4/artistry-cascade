"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
const PromiseUtil_1 = require("../../../../../scripts/util/PromiseUtil");
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
    }, {
        ingredient: 'Scallions',
        quantity: '1/8',
        unit: 'cup'
    }, {
        ingredient: 'Cheese',
        quantity: '1/8',
        unit: 'cup'
    }];
class TableView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.searchValue = '';
        this.showOptions = false;
        this.options = [];
        this.onChange = async (event) => {
            this.searchValue = event.target.value;
            await (0, PromiseUtil_1.wait)(1000);
            this.showOptions = true;
            this.options = data;
        };
        this.onSelectOption = (event, value) => {
            this.searchValue = value;
            this.showOptions = false;
        };
        this.onSearch = (event, value) => {
            this.searchValue = value;
            this.showOptions = false;
        };
        this.onClose = (event) => {
            this.showOptions = false;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "List", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Grid, { space: true },
                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Cell, null,
                        cascade_1.default.createElement(ArtistryCascade_1.Search, { value: this.searchValue, options: [
                                'Option 1',
                                'Option 2',
                                'Option 3'
                            ], showOptions: this.showOptions, onChange: this.onChange, onSelectOption: this.onSelectOption, onSearch: this.onSearch, onClose: this.onClose, altAction: this.altAction, fill: true, buttonText: cascade_1.default.createElement("span", { className: "nowrap" },
                                cascade_1.default.createElement(ArtistryCascade_1.Icon, { name: "search" }),
                                " Search"), screenSize: "small" })))),
            cascade_1.default.createElement(ArtistryCascade_1.List, { data: this.options, template: item => item.ingredient, active: 3, selected: [1, 3, 5], space: true })));
    }
}
exports.default = TableView;
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], TableView.prototype, "searchValue", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], TableView.prototype, "showOptions", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Array)
], TableView.prototype, "options", void 0);
//# sourceMappingURL=ListView.js.map