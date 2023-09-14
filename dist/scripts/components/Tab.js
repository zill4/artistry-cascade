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
const Carousel_1 = require("./Carousel");
class Tab extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.activeIndex = this.props.activeIndex || 0;
    }
    selectPanel(index) {
        if (this.props.onSelectPanel) {
            this.props.onSelectPanel(index);
        }
        else {
            this.activeIndex = index;
        }
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('tab-container');
        let activeIndex = typeof this.props.activeIndex !== 'undefined' ?
            this.props.activeIndex :
            (this.activeIndex || 0);
        if (this.props.space) {
            classNames.push('tab-space');
        }
        if (this.props.fillHeight) {
            classNames.push('fill-height');
        }
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id },
            cascade_1.default.createElement("ul", { className: "tab-header" }, this.props.titles ? this.props.titles.map((title, index) => {
                let className = activeIndex === index ? 'tab-title tab-active' : 'tab-title';
                return cascade_1.default.createElement("li", { className: className },
                    cascade_1.default.createElement("a", { onclick: this.selectPanel.bind(this, index) }, title));
            }) : undefined),
            this.props.animated ?
                cascade_1.default.createElement(Carousel_1.default, { className: "tab-carousel", activeIndex: activeIndex, safe: this.props.safe, staticHeight: this.props.staticHeight, scroll: this.props.scroll }, this.children)
                : cascade_1.default.createElement("div", { className: "tab-body" }, this.children ? this.children.map((child, index) => {
                    let className = activeIndex === index ? 'tab-panel tab-active' : 'tab-panel';
                    return cascade_1.default.createElement("div", { className: className }, child);
                }) : undefined)));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Tab.prototype, "activeIndex", void 0);
exports.default = Tab;
//# sourceMappingURL=Tab.js.map