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
class DrawerView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.drawerOpen = false;
        this.openDrawer = () => {
            this.drawerOpen = true;
        };
        this.closeDrawer = () => {
            this.drawerOpen = false;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Drawer", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.openDrawer }, "Open Drawer"),
            cascade_1.default.createElement(ArtistryCascade_1.Drawer, { open: this.drawerOpen, onClose: this.closeDrawer },
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.closeDrawer, className: "pull-right" }, "Close"),
                cascade_1.default.createElement("p", null, "Drawer Content"),
                cascade_1.default.createElement("br", null),
                cascade_1.default.createElement(ArtistryCascade_1.Form, null,
                    cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Input" },
                        cascade_1.default.createElement("input", { className: "input" })),
                    cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
                    cascade_1.default.createElement(ArtistryCascade_1.ActionBar, null,
                        cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "primary" }, "OK"))))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], DrawerView.prototype, "drawerOpen", void 0);
exports.default = DrawerView;
//# sourceMappingURL=DrawerView.js.map