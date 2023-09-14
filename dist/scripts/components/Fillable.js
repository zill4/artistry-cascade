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
const BodyScroll_1 = require("../util/BodyScroll");
class Fillable extends cascade_1.Component {
    constructor(props, ...children) {
        super(props, ...children);
        this.filled = this.props.filled;
        this.animating = false;
        this.running = false;
        this.runCount = 0;
        this.transitionEnd = (event) => {
            if (event.propertyName === 'top') {
                let animating = this.animating;
                if (!animating) {
                    if (this.props.filled) {
                        this.running = false;
                        BodyScroll_1.default.lock(true);
                    }
                    else {
                        this.running = false;
                        this.filled = false;
                        this.height = undefined;
                        this.width = undefined;
                        this.top = undefined;
                        this.right = undefined;
                        this.bottom = undefined;
                        this.left = undefined;
                        BodyScroll_1.default.unlock();
                    }
                }
            }
        };
        if (props.filled) {
            this.top = 0 + 'px';
            this.right = 0 + 'px';
            this.bottom = 0 + 'px';
            this.left = 0 + 'px';
            BodyScroll_1.default.lock(true);
        }
    }
    afterRender(node, updating) {
        if (!updating) {
            node.addEventListener('transitionend', this.transitionEnd);
        }
    }
    async afterProps(mounted) {
        if (mounted && this.props.filled !== this.prevProps.filled) {
            let node = this.element;
            this.runCount++;
            let runCount = this.runCount;
            this.animating = true;
            if (!this.props.filled) {
                let rect = node.getBoundingClientRect();
                this.top = rect.top + 'px';
                this.bottom = window.innerHeight - rect.top - rect.height + 'px';
                this.left = rect.left + 'px';
                this.right = document.body.scrollWidth - rect.left - rect.width + 'px';
                await cascade_1.default.track(this, 'top');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
            }
            else {
                let rect = node.getBoundingClientRect();
                this.height = rect.height + 'px';
                this.width = rect.width + 'px';
                this.running = true;
                await cascade_1.default.track(this, 'running');
                if (runCount !== this.runCount) {
                    return;
                }
                this.top = rect.top + 'px';
                this.bottom = window.innerHeight - rect.top - rect.height + 'px';
                this.left = rect.left + 'px';
                this.right = document.body.scrollWidth - rect.left - rect.width + 'px';
                await cascade_1.default.track(this, 'top');
                if (runCount !== this.runCount) {
                    return;
                }
                this.top = undefined;
                this.right = undefined;
                this.bottom = undefined;
                this.left = undefined;
                this.filled = true;
                await cascade_1.default.track(this, 'filled');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
            }
        }
    }
    afterDispose() {
        if (this.filled) {
            BodyScroll_1.default.unlock();
        }
        this.runCount++;
    }
    render() {
        let { id, className, card } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('fillable');
        if (card) {
            classNames.push('card-fillable');
        }
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: id, "data-running": this.running, "data-filled": this.filled, style: {
                height: this.height,
                width: this.width
            } },
            cascade_1.default.createElement("div", { className: "fillable-content", style: {
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left
                } }, this.children)));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Fillable.prototype, "filled", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "height", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "width", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "top", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "right", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "bottom", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Fillable.prototype, "left", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Fillable.prototype, "animating", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Fillable.prototype, "running", void 0);
exports.default = Fillable;
//# sourceMappingURL=Fillable.js.map