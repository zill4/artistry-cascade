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
class MenuBarView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.userMenuOpen = false;
        this.toggleUserMenu = (event) => {
            event.preventDefault();
            this.userMenuOpen = !this.userMenuOpen;
        };
        this.closeUserMenu = (event) => {
            event.preventDefault();
            this.userMenuOpen = false;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.MenuBar, { top: true, title: "Artistry Cascade" },
            cascade_1.default.createElement(ArtistryCascade_1.MenuBarLink, { active: true, title: "Home", href: "#" }),
            cascade_1.default.createElement(ArtistryCascade_1.Spacer, null),
            cascade_1.default.createElement(ArtistryCascade_1.MenuBarLink, { title: cascade_1.default.createElement(ArtistryCascade_1.UserThumbnail, { src: "https://placebear.com/50/50", placeholder: "C", size: "small", popover: "Logout", popoverDirection: "bottom", popoverAlign: "right" }) }),
            cascade_1.default.createElement(ArtistryCascade_1.MenuBarLink, { title: cascade_1.default.createElement(ArtistryCascade_1.UserThumbnail, { src: "", placeholder: "C", size: "small", onclick: this.toggleUserMenu, popover: "Logout", popoverDirection: "bottom", popoverAlign: "right", popoverMenu: true, popoverOpen: this.userMenuOpen, menuBarTop: true, onPopoverClose: this.closeUserMenu }) })));
    }
}
exports.default = MenuBarView;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], MenuBarView.prototype, "userMenuOpen", void 0);
//# sourceMappingURL=MenuBarView.js.map