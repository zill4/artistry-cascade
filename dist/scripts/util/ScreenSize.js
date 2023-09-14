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
exports.ScreenSize = void 0;
const cascade_1 = require("cascade");
class WindowState {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.resizeHandler = () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        };
    }
    get screenSize() {
        let width = this.width;
        if (width <= ScreenSize.Small) {
            return ScreenSize.XSmall;
        }
        else if (width <= ScreenSize.Medium) {
            return ScreenSize.Small;
        }
        else if (width <= ScreenSize.Large) {
            return ScreenSize.Medium;
        }
        else if (width <= ScreenSize.XLarge) {
            return ScreenSize.Large;
        }
        else {
            return ScreenSize.XLarge;
        }
    }
    init() {
        window.addEventListener('resize', this.resizeHandler);
    }
    dispose() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    static getSize(variableName) {
        return parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue(variableName));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], WindowState.prototype, "width", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], WindowState.prototype, "height", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], WindowState.prototype, "screenSize", null);
exports.default = WindowState;
var ScreenSize;
(function (ScreenSize) {
    ScreenSize[ScreenSize["XSmall"] = 0] = "XSmall";
    ScreenSize[ScreenSize["Small"] = WindowState.getSize('--size-sm')] = "Small";
    ScreenSize[ScreenSize["Medium"] = WindowState.getSize('--size-md')] = "Medium";
    ScreenSize[ScreenSize["Large"] = WindowState.getSize('--size-lg')] = "Large";
    ScreenSize[ScreenSize["XLarge"] = WindowState.getSize('--size-xl')] = "XLarge";
})(ScreenSize = exports.ScreenSize || (exports.ScreenSize = {}));
//# sourceMappingURL=ScreenSize.js.map