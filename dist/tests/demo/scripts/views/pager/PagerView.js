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
class PagerView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.index = 1;
        this.count = 20;
        this.onClickIndex = (index, event) => {
            this.index = index;
        };
        this.onClickBack = (event) => {
            this.index--;
        };
        this.onClickForward = (event) => {
            this.index++;
        };
        this.onClickStart = (event) => {
            this.index = 0;
        };
        this.onClickEnd = (event) => {
            this.index = 19;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Pager", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Pager, { count: 20, index: this.index, showCount: 7, showArrows: true, showEnds: true, onClickIndex: this.onClickIndex, onClickEnd: this.onClickEnd })));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], PagerView.prototype, "index", void 0);
exports.default = PagerView;
//# sourceMappingURL=PagerView.js.map