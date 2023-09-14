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
class CarouselView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.activeIndex = 0;
        this.nextCarouselSlide = () => {
            this.activeIndex++;
        };
        this.backCarouselSlide = () => {
            this.activeIndex--;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Carousel", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.ActionBar, { align: "space-between" },
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.backCarouselSlide }, "Back"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.nextCarouselSlide }, "Next")),
            cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
            cascade_1.default.createElement(ArtistryCascade_1.Carousel, { activeIndex: this.activeIndex, animation: "slide", space: true },
                cascade_1.default.createElement("div", { style: "background-color: red; padding: 10px;" }, "Content 0"),
                cascade_1.default.createElement("div", { style: "background-color: blue; padding: 10px;" },
                    "Content 1",
                    cascade_1.default.createElement("br", null),
                    " Line 2"),
                cascade_1.default.createElement("div", { style: "background-color: yellow; padding: 10px;" },
                    "Content 2",
                    cascade_1.default.createElement("br", null),
                    " Line 2",
                    cascade_1.default.createElement("br", null),
                    " Line 3")),
            cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
            cascade_1.default.createElement(ArtistryCascade_1.Carousel, { activeIndex: this.activeIndex, animation: "flip", space: true },
                cascade_1.default.createElement("div", { style: "background-color: red; padding: 10px;" }, "Content 0"),
                cascade_1.default.createElement("div", { style: "background-color: blue; padding: 10px;" },
                    "Content 1",
                    cascade_1.default.createElement("br", null),
                    " Line 2"),
                cascade_1.default.createElement("div", { style: "background-color: yellow; padding: 10px;" },
                    "Content 2",
                    cascade_1.default.createElement("br", null),
                    " Line 2",
                    cascade_1.default.createElement("br", null),
                    " Line 3"))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], CarouselView.prototype, "activeIndex", void 0);
exports.default = CarouselView;
//# sourceMappingURL=CarouselView.js.map