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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const Carousel_1 = require("./Carousel");
const CardContainer_1 = require("./CardContainer");
class CardCarousel extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.rootRef = new cascade_1.Ref();
        this.initialized = false;
        this.slideSize = 1;
        this.onChangeSize = (slideSize, oldSlideSize) => {
            if (this.props.onChangeSize) {
                let oldIndex = this.props.activeIndex;
                if (oldIndex < 0) {
                    let length = this.children.length;
                    oldIndex = (oldIndex % length) + length;
                }
                let newIndex = Math.floor(oldIndex * oldSlideSize / slideSize);
                this.props.onChangeSize(newIndex, slideSize, oldSlideSize);
            }
        };
        this.resizeHandler = () => {
            let { minWidth, cardSpacing, carouselSpacing } = this.props;
            let slideSize = 1;
            let element = this.rootRef.current;
            if (element) {
                minWidth = minWidth || 300;
                cardSpacing = cardSpacing || 10;
                carouselSpacing = carouselSpacing || 10;
                minWidth += cardSpacing;
                let width = element.clientWidth;
                if (width > minWidth + cardSpacing) {
                    let remainder = (width - cardSpacing) % minWidth;
                    slideSize = (width - cardSpacing - remainder) / minWidth;
                }
            }
            if (!this.initialized) {
                let oldSlideSize = this.slideSize;
                this.initialized = true;
                this.slideSize = slideSize;
                this.onChangeSize(slideSize, oldSlideSize);
            }
            else if (slideSize !== this.slideSize) {
                let oldSlideSize = this.slideSize;
                this.slideSize = slideSize;
                this.onChangeSize(slideSize, oldSlideSize);
            }
        };
    }
    afterRender(element, updating) {
        if (!updating) {
            window.setTimeout(() => {
                this.resizeHandler();
            });
            window.addEventListener('resize', this.resizeHandler);
        }
    }
    afterDispose() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    render() {
        let _a = this.props, { id, className, minWidth, maxWidth } = _a, props = __rest(_a, ["id", "className", "minWidth", "maxWidth"]);
        let classNames = className ? [className] : [];
        classNames.push('card-carousel');
        let wrappedChildren = [];
        let innerWrapper;
        let slideSize = this.slideSize;
        this.children.forEach((child, index) => {
            if (index % slideSize === 0) {
                innerWrapper = [];
                wrappedChildren.push(innerWrapper);
            }
            if (child instanceof cascade_1.ComponentNode) {
                if (typeof child.key === 'undefined') {
                    child.key = index;
                }
            }
            innerWrapper.push(child);
        });
        return (cascade_1.default.createElement("div", { ref: this.rootRef, id: id, className: classNames.join(' ') }, this.initialized ?
            cascade_1.default.createElement(Carousel_1.default, Object.assign({}, props), wrappedChildren.map((children, index) => {
                return (cascade_1.default.createElement(CardContainer_1.default, { className: "space", minWidth: minWidth, maxWidth: maxWidth, key: index }, children));
            })) :
            undefined));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], CardCarousel.prototype, "initialized", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], CardCarousel.prototype, "slideSize", void 0);
exports.default = CardCarousel;
//# sourceMappingURL=CardCarousel.js.map