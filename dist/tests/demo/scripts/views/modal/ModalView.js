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
class ModalView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.modalOpen = false;
        this.modalLock = false;
        this.innerModalOpen = false;
        this.openModal = () => {
            this.modalOpen = true;
        };
        this.closeModal = () => {
            this.modalOpen = false;
            console.log('close');
        };
        this.confirmModal = () => {
            this.modalOpen = false;
            console.log('confirm');
        };
        this.openInnerModal = () => {
            this.innerModalOpen = true;
        };
        this.closeInnerModal = () => {
            this.innerModalOpen = false;
        };
        this.lockModal = () => {
            this.modalLock = true;
            window.setTimeout(() => {
                this.modalLock = false;
            }, 1000);
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Modal", space: true, headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.openModal }, "Open Modal"),
            cascade_1.default.createElement(ArtistryCascade_1.Modal, { open: this.modalOpen, onClose: this.closeModal, onConfirm: this.confirmModal, title: "Modal", animation: "top", screenSize: "small", lockable: true, locked: this.modalLock, closeable: true, space: true },
                cascade_1.default.createElement("div", null, "test"),
                cascade_1.default.createElement(ArtistryCascade_1.ButtonBar, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.openInnerModal }, "Open Inner Modal"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.lockModal }, "Lock Modal")),
                cascade_1.default.createElement(ArtistryCascade_1.Modal, { open: this.innerModalOpen, onClose: this.closeInnerModal, title: "Inner Modal", animation: "center", screenSize: "small", closeable: true },
                    cascade_1.default.createElement("div", null, "inner test")))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ModalView.prototype, "modalOpen", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ModalView.prototype, "modalLock", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ModalView.prototype, "innerModalOpen", void 0);
exports.default = ModalView;
//# sourceMappingURL=ModalView.js.map