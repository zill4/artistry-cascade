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
const ImageGenerator_1 = require("../../util/ImageGenerator");
class VerticalCard extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.image = ImageGenerator_1.default.createPlaceholder(350, 150);
        this.closed = true;
        this.toggleClosed = () => {
            this.closed = !this.closed;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Card, { header: cascade_1.default.createElement("span", null, "Card Content"), nav: cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.toggleClosed }, "Expand"), grid: true },
            cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                cascade_1.default.createElement(ArtistryCascade_1.Cell, null,
                    cascade_1.default.createElement("img", { src: this.image }))),
            cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Card Content")),
            cascade_1.default.createElement(ArtistryCascade_1.Closeable, { closed: this.closed },
                cascade_1.default.createElement(ArtistryCascade_1.Grid, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Row, null,
                        cascade_1.default.createElement(ArtistryCascade_1.Cell, null, "Card Content"))))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Object)
], VerticalCard.prototype, "closed", void 0);
exports.default = VerticalCard;
//# sourceMappingURL=VerticalCard.js.map