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
const PromiseUtil_1 = require("../util/PromiseUtil");
const ClassNames_1 = require("../util/ClassNames");
class Notification extends cascade_1.Component {
    constructor(props, children) {
        super(props, children);
        this.hide = false;
        this.decayCounter = 0;
        this.startDecay = async () => {
            if (this.props.decay) {
                this.decayCounter++;
                let decayCounter = this.decayCounter;
                await PromiseUtil_1.wait(this.props.decay);
                if (decayCounter === this.decayCounter) {
                    this.hide = true;
                }
            }
        };
        this.endDecay = async (event) => {
            if (event.animationName.endsWith('out') && this.props.onClose) {
                this.props.onClose();
            }
        };
        this.stopDecay = () => {
            if (this.props.allowDelay) {
                this.decayCounter++;
            }
        };
        this.startDecay();
    }
    render() {
        let { id, className, type, title, clickable, allowDelay } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('notification', 'animatable');
        let theme;
        switch (type) {
            case 'success':
                theme = 'success';
                break;
            case 'info':
                theme = 'info';
                break;
            case 'warning':
                theme = 'warning';
                break;
            case 'danger':
                theme = 'danger';
                break;
        }
        if (clickable || allowDelay) {
            classNames.add('clickable');
        }
        let direction = 'in';
        if (this.hide) {
            direction = 'out';
        }
        return (cascade_1.default.createElement("aside", { className: classNames.toString(), "data-animation": this.props.animation || "fade-right", "data-direction": direction, "data-theme": theme, id: id, onclick: this.props.onClick, onmouseenter: this.stopDecay, onmouseleave: this.startDecay, onAnimationEnd: this.endDecay, role: clickable ? "button" : undefined },
            title ?
                cascade_1.default.createElement("header", null, title) :
                undefined,
            cascade_1.default.createElement("div", { className: "notification-content" }, this.children)));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Object)
], Notification.prototype, "hide", void 0);
exports.default = Notification;
//# sourceMappingURL=Notification.js.map