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
const Grid_1 = require("./Grid");
const PromiseUtil_1 = require("../util/PromiseUtil");
const BodyScroll_1 = require("../util/BodyScroll");
const DepthStack_1 = require("../util/DepthStack");
const Portal_1 = require("../util/Portal");
class Drawer extends cascade_1.Component {
    constructor(props, ...children) {
        super(props, ...children);
        this.open = this.props.open;
        this.remove = !this.props.open;
        this.container = document.createElement('div');
        this.rootRef = new cascade_1.Ref();
        this.close = (event) => {
            if (this.props.onClose) {
                this.props.onClose(event);
            }
        };
        this.transitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                if (!this.props.open) {
                    this.remove = true;
                }
            }
        };
        this.onScroll = (event) => {
            if (this.props.onscroll) {
                this.props.onscroll(event);
            }
        };
        if (this.props.open) {
            BodyScroll_1.default.lock(true);
            DepthStack_1.default.push(this.close);
        }
    }
    preventClick(event) {
        event.stopPropagation();
    }
    afterRender(node, updating) {
        if (!updating) {
            this.rootRef.current.children[0].addEventListener('transitionend', this.transitionEnd);
        }
    }
    async afterProps(mounted) {
        if (mounted && this.props.open != this.prevProps.open) {
            if (this.props.open) {
                this.remove = false;
                BodyScroll_1.default.lock(true);
                await PromiseUtil_1.waitAnimation();
                this.open = this.props.open;
                DepthStack_1.default.push(this.close);
            }
            else {
                BodyScroll_1.default.unlock();
                this.open = this.props.open;
                DepthStack_1.default.remove(this.close);
            }
        }
    }
    afterDispose(element) {
        if (this.open) {
            BodyScroll_1.default.unlock();
            DepthStack_1.default.remove(this.close);
        }
    }
    render() {
        let { className, id, direction, full, background, space } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('drawer');
        direction = direction || 'bottom';
        classNames.push('drawer-' + direction);
        if (this.open) {
            classNames.push('drawer-open');
        }
        if (full) {
            classNames.push('drawer-full');
        }
        if (background) {
            classNames.push('drawer-background');
        }
        if (space) {
            classNames.push('drawer-space');
        }
        let innerClassNames = ['drawer-content'];
        if (this.props.grid) {
            Grid_1.gridConfig(innerClassNames, this.props);
        }
        return (cascade_1.default.createElement(cascade_1.Portal, { element: Portal_1.default.getElement('layer-overlay'), remove: this.remove },
            cascade_1.default.createElement("div", { className: classNames.join(' '), id: id, ref: this.rootRef },
                cascade_1.default.createElement("div", { class: "drawer-background", onscroll: this.onScroll },
                    cascade_1.default.createElement("div", { class: "drawer-scroller" },
                        cascade_1.default.createElement("div", { className: innerClassNames.join(' '), onclick: this.preventClick }, this.children))))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Drawer.prototype, "open", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Drawer.prototype, "remove", void 0);
exports.default = Drawer;
//# sourceMappingURL=Drawer.js.map