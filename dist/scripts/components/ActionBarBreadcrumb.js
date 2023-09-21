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
exports.ActionBarItem = void 0;
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
class ActionBarBreadcrumb extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.ref = new cascade_1.Ref();
    }
    afterRender(_node, update) {
        if (!update) {
            let breadcrumbHeader = this.ref.current;
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            entry.target.classList.remove('action-bar-breadcrumb-item-hidden');
                        }
                    }
                    else {
                        if (!entry.target.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            entry.target.classList.add('action-bar-breadcrumb-item-hidden');
                        }
                    }
                });
                let hiddenCount = 0;
                breadcrumbHeader.childNodes.forEach(child => {
                    if (child instanceof Element) {
                        if (child.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            hiddenCount++;
                        }
                    }
                });
                if (hiddenCount > 0) {
                    breadcrumbHeader.setAttribute('data-align', 'end');
                }
                else {
                    breadcrumbHeader.removeAttribute('data-align');
                }
            }, {
                root: breadcrumbHeader,
                rootMargin: '0px',
                threshold: 1
            });
            breadcrumbHeader.childNodes.forEach(child => {
                if (child instanceof Element) {
                    this.observer.observe(child);
                }
            });
        }
    }
    afterDispose() {
        this.observer.disconnect();
    }
    render() {
        let { id, className, } = this.props;
        let classNames = new ClassNames_1.default(className, 'action-bar', 'action-bar-breadcrumb');
        return (cascade_1.default.createElement("div", { ref: this.ref, className: classNames.toString(), id: id }, this.observer ?
            this.children.map((child, index) => {
                return (cascade_1.default.createElement(ActionBarItem, { key: index, observer: this.observer }, child));
            }) :
            undefined));
    }
}
exports.default = ActionBarBreadcrumb;
__decorate([
    cascade_1.observable,
    __metadata("design:type", IntersectionObserver)
], ActionBarBreadcrumb.prototype, "observer", void 0);
class ActionBarItem extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.hidden = false;
        this.ref = new cascade_1.Ref();
    }
    afterRender(node, update) {
        if (!update) {
            this.props.observer.observe(this.ref.current);
        }
    }
    afterDispose() {
        this.props.observer.unobserve(this.ref.current);
    }
    render() {
        return (cascade_1.default.createElement("div", { ref: this.ref }, this.children));
    }
}
exports.ActionBarItem = ActionBarItem;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], ActionBarItem.prototype, "hidden", void 0);
//# sourceMappingURL=ActionBarBreadcrumb.js.map