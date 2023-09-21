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
class Draggable extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.dragging = false;
        this.onDrag = () => {
            this.dragging = true;
        };
        this.onDragEnd = () => {
            this.dragging = false;
        };
    }
    render() {
        return (cascade_1.default.createElement("div", { draggable: true, ondrag: this.onDrag, ondragend: this.onDragEnd }, this.props.item));
    }
}
exports.default = Draggable;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Draggable.prototype, "dragging", void 0);
//# sourceMappingURL=Draggable.js.map