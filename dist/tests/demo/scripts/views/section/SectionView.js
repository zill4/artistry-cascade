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
class SectionView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.locked = false;
        this.closed = false;
        this.close = () => {
            this.closed = !this.closed;
        };
        this.lockContents = () => {
            this.locked = true;
            window.setTimeout(() => {
                this.locked = false;
            }, 1000);
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Section", space: true, headerSpace: true, lockable: true, closeable: true, locked: this.locked, closed: this.closed, onClose: this.close },
            "Section Content",
            cascade_1.default.createElement("br", null),
            cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.lockContents }, "Lock")));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], SectionView.prototype, "locked", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], SectionView.prototype, "closed", void 0);
exports.default = SectionView;
//# sourceMappingURL=SectionView.js.map