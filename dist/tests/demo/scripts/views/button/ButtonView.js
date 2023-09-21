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
class ButtonView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.locked = false;
        this.popoverOpen = false;
        this.lockButton = () => {
            this.locked = true;
            window.setTimeout(() => {
                this.locked = false;
            }, 1000);
        };
        this.openPopover = () => {
            this.popoverOpen = true;
        };
        this.closePopover = () => {
            this.popoverOpen = false;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Buttons", space: true, headerSpace: true },
            cascade_1.default.createElement("h3", null, "Individual Buttons"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, null, "Edit"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "primary" }, "Save"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Text Only Buttons"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "textonly" }, "Edit"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "textonly", theme: "primary" }, "Save"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "textonly", theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Outline Buttons"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "outline" }, "Edit"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "outline", theme: "primary" }, "Save"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "outline", theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Button Sizes"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { displaySize: "small" }, "Small"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, null, "Medium"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { displaySize: "large" }, "Large")),
            cascade_1.default.createElement("h3", null, "Disabled Buttons"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { disabled: true }, "Edit"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { disabled: true, theme: "primary" }, "Save"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { disabled: true, theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Button Group"),
            cascade_1.default.createElement(ArtistryCascade_1.ButtonGroup, null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, null, "View"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "primary", popover: "Popover", popoverAlign: "left", popoverSpace: true }, "Edit"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Button Bar"),
            cascade_1.default.createElement(ArtistryCascade_1.ButtonBar, null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, null, "View"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "primary", popover: "Popover", popoverAlign: "left", popoverSpace: true }, "Edit"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "danger" }, "Delete")),
            cascade_1.default.createElement("h3", null, "Lockable Buttons"),
            cascade_1.default.createElement("div", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { lockContent: "Locked", locked: this.locked, onclick: this.lockButton }, "Lockable Edit"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { lockContent: "Locked", locked: this.locked, onclick: this.lockButton, theme: "primary" }, "Lockable Save"),
                ' ',
                cascade_1.default.createElement(ArtistryCascade_1.Button, { lockContent: "Locked", locked: this.locked, onclick: this.lockButton, theme: "danger" }, "Lockable Delete")),
            cascade_1.default.createElement("h3", null, "Tooltip"),
            cascade_1.default.createElement(ArtistryCascade_1.Button, { tooltip: "Information...", tooltipDirection: "right" }, "Tooltip"),
            cascade_1.default.createElement("h3", null, "Popover"),
            cascade_1.default.createElement(ArtistryCascade_1.Button, { popover: cascade_1.default.createElement("span", null,
                    cascade_1.default.createElement("strong", null, "Popover"),
                    " Text"), popoverDirection: "right", popoverSpace: true }, "Popover"),
            cascade_1.default.createElement("h3", null, "Popover Menu"),
            cascade_1.default.createElement(ArtistryCascade_1.Button, { popover: cascade_1.default.createElement("span", null,
                    cascade_1.default.createElement("strong", null, "Popover"),
                    " Text"), popoverDirection: "right", popoverMenu: true, popoverSpace: true, popoverOpen: this.popoverOpen, onPopoverClose: this.closePopover, onclick: this.openPopover }, "Popover Menu"),
            cascade_1.default.createElement("div", { className: "explode-width" },
                cascade_1.default.createElement(ArtistryCascade_1.ActionBarBreadcrumb, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { display: "underline" }, "Home")))));
    }
}
exports.default = ButtonView;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ButtonView.prototype, "locked", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ButtonView.prototype, "popoverOpen", void 0);
//# sourceMappingURL=ButtonView.js.map