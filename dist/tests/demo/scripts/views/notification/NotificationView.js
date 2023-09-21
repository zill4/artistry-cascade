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
class NotificationView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.pushDefault = () => {
            this.pushItem({
                type: 'default',
                title: 'Default',
                text: 'This is a default message.',
                decay: 2000,
                onClick: () => console.log('Default clicked!')
            });
        };
        this.pushSuccess = () => {
            this.pushItem({
                type: 'success',
                title: 'Success',
                text: 'This is a success message.',
                decay: 2000
            });
        };
        this.pushInfo = () => {
            this.pushItem({
                type: 'info',
                title: 'Info',
                text: 'This is a info message.',
                decay: 2000
            });
        };
        this.pushWarning = () => {
            this.pushItem({
                type: 'warning',
                title: 'Warning',
                text: 'This is a warning message.',
                decay: 2000
            });
        };
        this.pushDanger = () => {
            this.pushItem({
                type: 'danger',
                title: 'Danger',
                text: 'This is a danger message.',
                decay: 2000
            });
        };
    }
    pushItem(item) {
        this.items[NotificationView.currentKey] = item;
        NotificationView.currentKey++;
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Notification", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.ActionBar, { align: "start" },
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.pushDefault }, "Push Default"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.pushSuccess }, "Push Success"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.pushInfo }, "Push Info"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.pushWarning }, "Push Warning"),
                cascade_1.default.createElement(ArtistryCascade_1.Button, { onclick: this.pushDanger }, "Push Danger")),
            cascade_1.default.createElement(ArtistryCascade_1.NotificationContainer, null, Object.keys(this.items).map(key => {
                let item = this.items[key];
                return (cascade_1.default.createElement(ArtistryCascade_1.Notification, { key: key, title: item.title, type: item.type, decay: item.decay, onClick: item.onClick, clickable: !!item.onClick, allowDelay: true, onClose: () => {
                        delete this.items[key];
                    } }, item.text));
            }))));
    }
}
NotificationView.currentKey = 0;
exports.default = NotificationView;
__decorate([
    cascade_1.hash,
    __metadata("design:type", Object)
], NotificationView.prototype, "items", void 0);
//# sourceMappingURL=NotificationView.js.map