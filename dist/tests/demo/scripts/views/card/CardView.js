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
const VerticalCard_1 = require("./VerticalCard");
class CardView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.closed = false;
        this.filled = false;
        this.index = 0;
        this.toggleClosed = () => {
            this.closed = !this.closed;
        };
        this.toggleFilled = () => {
            this.filled = !this.filled;
        };
        this.clickNext = () => {
            this.index++;
        };
        this.clickPrevious = () => {
            this.index--;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Card", space: true, headerSpace: true },
            cascade_1.default.createElement("h3", null, "Card"),
            cascade_1.default.createElement(ArtistryCascade_1.CardContainer, null,
                cascade_1.default.createElement(VerticalCard_1.default, null),
                cascade_1.default.createElement(ArtistryCascade_1.Fillable, { card: true, filled: this.filled },
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { grid: true, space: true, fill: true },
                        cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                            cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Card Content"),
                            cascade_1.default.createElement(ArtistryCascade_1.Cell, null,
                                cascade_1.default.createElement(ArtistryCascade_1.Button, { onClick: this.toggleClosed }, "Expand"),
                                cascade_1.default.createElement(ArtistryCascade_1.Button, { onClick: this.toggleFilled }, "Fill"))),
                        cascade_1.default.createElement(ArtistryCascade_1.Closeable, { closed: this.closed },
                            cascade_1.default.createElement(ArtistryCascade_1.Grid, null,
                                cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                                    cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Card Content"))))))),
            cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                    cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                    cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                    cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                    cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.clickPrevious }, "<"),
                cascade_1.default.createElement(ArtistryCascade_1.CardCarousel, { activeIndex: this.index },
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    cascade_1.default.createElement(ArtistryCascade_1.Card, { type: "success", handle: "left", square: true },
                        cascade_1.default.createElement(ArtistryCascade_1.CardSection, { multiColumn: true },
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 1" }, "Data 1"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 2" }, "Data 2"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 3" }, "Data 3"),
                            cascade_1.default.createElement(ArtistryCascade_1.CardControl, { title: "Title 4" }, "Data 4")))),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.clickNext }, ">"))));
    }
}
exports.default = CardView;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], CardView.prototype, "closed", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], CardView.prototype, "filled", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], CardView.prototype, "index", void 0);
//# sourceMappingURL=CardView.js.map