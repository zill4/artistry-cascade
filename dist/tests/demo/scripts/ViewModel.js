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
const User_1 = require("./models/User");
class ViewModel {
    constructor() {
        this.modalOpen = false;
        this.innerModalOpen = false;
        this.users = [];
        this.user = new User_1.default('', '');
    }
    addUser() {
        let user = this.user;
        let valid = user['firstName-valid'] && user['lastName-valid'];
        if (valid) {
            this.users.push(user);
            this.user = new User_1.default('', '');
        }
    }
    removeUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ViewModel.prototype, "modalOpen", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ViewModel.prototype, "innerModalOpen", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Array)
], ViewModel.prototype, "users", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", User_1.default)
], ViewModel.prototype, "user", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", HTMLElement)
], ViewModel.prototype, "firstNameInput", void 0);
exports.default = ViewModel;
//# sourceMappingURL=ViewModel.js.map