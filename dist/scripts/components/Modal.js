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
const Button_1 = require("./Button");
const Grid_1 = require("./Grid");
const PromiseUtil_1 = require("../util/PromiseUtil");
const BodyScroll_1 = require("../util/BodyScroll");
const DepthStack_1 = require("../util/DepthStack");
const Portal_1 = require("../util/Portal");
class Modal extends cascade_1.Component {
    constructor(props, ...children) {
        super(props, ...children);
        this.open = this.props.open;
        this.remove = !this.props.open;
        this.rootRef = new cascade_1.Ref();
        this.close = (event) => {
            if (this.props.onClose) {
                return this.props.onClose(event);
            }
            else {
                return false;
            }
        };
        this.confirm = (event) => {
            if (this.props.onConfirm) {
                return this.props.onConfirm(event);
            }
            else {
                return false;
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
                DepthStack_1.default.blur();
                this.remove = false;
                BodyScroll_1.default.lock(true);
                await PromiseUtil_1.waitAnimation();
                this.open = this.props.open;
                DepthStack_1.default.push(this.close, this.confirm);
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
        let { animation, background, screenSize, closeable, closeButton, title, header, footer } = this.props;
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('modal');
        if (this.open) {
            classNames.push('modal-open');
        }
        if (background) {
            classNames.push('modal-background');
        }
        if (animation) {
            classNames.push('modal-animate-' + animation.trim());
        }
        if (screenSize) {
            let sizes = (screenSize instanceof Array) ? screenSize : [screenSize];
            sizes.forEach(size => {
                switch (size) {
                    case 'all':
                        classNames.push('modal-all');
                        break;
                    case 'x-small':
                        classNames.push('modal-xs');
                        break;
                    case 'small':
                        classNames.push('modal-sm');
                        break;
                    case 'medium':
                        classNames.push('modal-md');
                        break;
                    case 'large':
                        classNames.push('modal-lg');
                        break;
                    case 'x-large':
                        classNames.push('modal-xl');
                        break;
                }
            });
        }
        let modalContentClassNames = [];
        if (this.props.lockable) {
            modalContentClassNames.push('lock-contents');
            if (this.props.locked) {
                modalContentClassNames.push('locked');
            }
        }
        if (this.props.space) {
            if (title || footer) {
                modalContentClassNames.push('modal-space');
            }
            else {
                modalContentClassNames.push('modal-space');
            }
        }
        if (this.props.grid) {
            Grid_1.gridConfig(modalContentClassNames, this.props);
        }
        let headerSection;
        if (title || header || closeable) {
            headerSection = (cascade_1.default.createElement("div", { className: "modal-header" },
                cascade_1.default.createElement("div", { className: "modal-title" }, title),
                closeable ?
                    cascade_1.default.createElement("div", { className: "action-bar" },
                        cascade_1.default.createElement(Button_1.default, { onclick: this.props.onClose, displaySize: "small" }, closeButton || 'Close')) :
                    null,
                cascade_1.default.createElement("div", null, header)));
        }
        return (cascade_1.default.createElement(cascade_1.Portal, { element: Portal_1.default.getElement('layer-overlay'), remove: this.remove },
            cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id, ref: this.rootRef, onscroll: this.onScroll },
                cascade_1.default.createElement("div", { className: "modal-background" }, headerSection || footer ?
                    cascade_1.default.createElement("div", { className: "modal-content", onclick: this.preventClick },
                        headerSection,
                        cascade_1.default.createElement("div", { className: 'modal-body ' + modalContentClassNames.join(' '), onscroll: this.onScroll }, this.children),
                        footer ?
                            cascade_1.default.createElement("div", { className: "modal-footer" }, footer)
                            : undefined) :
                    cascade_1.default.createElement("div", { className: 'modal-content ' + modalContentClassNames.join(' '), onclick: this.preventClick }, this.children)))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Modal.prototype, "open", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Modal.prototype, "remove", void 0);
exports.default = Modal;
//# sourceMappingURL=Modal.js.map