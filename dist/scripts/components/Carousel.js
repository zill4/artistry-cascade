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
class Carousel extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.height = undefined;
        this.activeIndex = this.props.activeIndex || 0;
        this.previousActiveIndex = this.props.activeIndex || 0;
        this.animating = false;
        this.selected = true;
        this.running = false;
        this.runCount = 0;
        this.transitionCount = 0;
        this.transitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                this.transitionCount++;
                this.transitionCount %= 2;
                if (!this.transitionCount) {
                    if (!this.running) {
                        this.animating = false;
                        this.height = undefined;
                        this.previousActiveIndex = this.activeIndex;
                    }
                }
            }
        };
    }
    afterRender(node, updating) {
        if (!updating) {
            node.addEventListener('transitionend', this.transitionEnd);
        }
    }
    async afterProps(updating) {
        let node = this.element;
        if (updating) {
            let { activeIndex } = this.props;
            let { activeIndex: previousActiveIndex } = this.prevProps;
            activeIndex = activeIndex || 0;
            previousActiveIndex = previousActiveIndex || 0;
            let children = this.children;
            if (children instanceof Array && children.length) {
                activeIndex %= children.length;
                previousActiveIndex %= children.length;
                if (activeIndex < 0) {
                    activeIndex += children.length;
                    activeIndex %= children.length;
                }
                if (previousActiveIndex < 0) {
                    previousActiveIndex += children.length;
                    previousActiveIndex %= children.length;
                }
            }
            else {
                activeIndex = 0;
                previousActiveIndex = 0;
            }
            if (activeIndex === previousActiveIndex) {
                return;
            }
            this.runCount++;
            let runCount = this.runCount;
            this.running = true;
            if (!this.props.staticHeight) {
                await cascade_1.default.set(this, 'height', node.offsetHeight + 'px');
                if (runCount !== this.runCount) {
                    return;
                }
            }
            await cascade_1.default.set(this, 'animating', true);
            if (runCount !== this.runCount) {
                return;
            }
            this.activeIndex = activeIndex;
            this.previousActiveIndex = previousActiveIndex;
            this.selected = false;
            await cascade_1.default.track(this, 'selected');
            await (0, PromiseUtil_1.waitAnimation)(1);
            if (runCount !== this.runCount) {
                return;
            }
            await cascade_1.default.set(this, 'selected', true);
            if (runCount !== this.runCount) {
                return;
            }
            if (!this.props.staticHeight) {
                let computedStyle = window.getComputedStyle(node, null);
                let paddingHeight = parseFloat(computedStyle.getPropertyValue('border-top-width')) +
                    parseFloat(computedStyle.getPropertyValue('border-bottom-width')) +
                    parseFloat(computedStyle.getPropertyValue('padding-top')) +
                    parseFloat(computedStyle.getPropertyValue('padding-bottom'));
                let activeChild = node.querySelector('.carousel-selected');
                if (activeChild) {
                    await cascade_1.default.set(this, 'height', paddingHeight + activeChild.clientHeight + 'px');
                }
                if (runCount !== this.runCount) {
                    return;
                }
            }
            if (this.running) {
                if (this.props.staticHeight) {
                    this.animating = false;
                    this.height = undefined;
                    await cascade_1.default.set(this, 'previousActiveIndex', this.activeIndex);
                }
                this.running = false;
            }
        }
    }
    afterDispose() {
        this.runCount++;
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('carousel');
        if (this.animating) {
            classNames.push('carousel-run');
        }
        if (this.props.fillHeight) {
            classNames.push('fill-height');
        }
        switch (this.props.animation) {
            case 'slide':
                break;
            case 'slide-fade':
                classNames.push('carousel-animate-fade');
                break;
            case 'fade':
                classNames.push('carousel-animate-fade');
                break;
            case 'flip':
                classNames.push('carousel-animate-flip');
                break;
            default:
                break;
        }
        if (this.props.safe) {
            classNames.push('carousel-safe');
        }
        if (this.props.scroll) {
            classNames.push('scrollable');
        }
        if (this.props.space) {
            classNames.push('carousel-space');
        }
        let children;
        if (this.children instanceof Array) {
            if (this.activeIndex !== this.previousActiveIndex) {
                if (this.activeIndex < this.previousActiveIndex) {
                    children = [
                        cascade_1.default.createElement("div", { key: this.activeIndex, className: this.selected ? "carousel-selected" : "" }, this.children[this.activeIndex]),
                        cascade_1.default.createElement("div", { key: this.previousActiveIndex, className: this.selected ? "" : "carousel-selected" }, this.children[this.previousActiveIndex])
                    ];
                }
                else {
                    children = [
                        cascade_1.default.createElement("div", { key: this.previousActiveIndex, className: this.selected ? "" : "carousel-selected" }, this.children[this.previousActiveIndex]),
                        cascade_1.default.createElement("div", { key: this.activeIndex, className: this.selected ? "carousel-selected" : "" }, this.children[this.activeIndex])
                    ];
                }
            }
            else {
                children = [
                    cascade_1.default.createElement("div", { key: this.activeIndex, className: this.selected ? "carousel-selected" : "" }, this.children[this.activeIndex])
                ];
            }
        }
        else {
            children = [
                cascade_1.default.createElement("div", { key: this.activeIndex, className: this.selected ? "carousel-selected" : "" }, this.children)
            ];
        }
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id, style: { height: this.height }, "data-scroll": this.props.scroll }, children));
    }
}
exports.default = Carousel;
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Carousel.prototype, "height", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Carousel.prototype, "activeIndex", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Carousel.prototype, "previousActiveIndex", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Carousel.prototype, "animating", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Carousel.prototype, "selected", void 0);
//# sourceMappingURL=Carousel.js.map