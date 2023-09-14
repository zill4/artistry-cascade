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
class Closeable extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.closed = this.props.closed;
        this.running = false;
        this.animating = false;
        this.height = undefined;
        this.runCount = 0;
        this.transitionEnd = (event) => {
            if (event.propertyName === 'height') {
                let animating = this.animating;
                if (!animating) {
                    if (this.closed) {
                        this.running = false;
                    }
                    else {
                        this.height = undefined;
                        this.running = false;
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
    afterDispose() {
        this.runCount++;
    }
    async afterProps(updating) {
        if (updating && this.props.closed !== this.prevProps.closed) {
            let node = this.element;
            this.runCount++;
            let runCount = this.runCount;
            this.running = true;
            this.animating = true;
            await cascade_1.default.track(this, 'animating');
            if (runCount !== this.runCount) {
                return;
            }
            if (this.props.closed) {
                this.height = node.offsetHeight + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.closed = true;
                await cascade_1.default.track(this, 'closed');
                if (runCount !== this.runCount) {
                    return;
                }
                let border = node.offsetHeight - node.clientHeight;
                this.height = border / 2 + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
                await cascade_1.default.track(this, 'animating');
            }
            else {
                let border = node.offsetHeight - node.clientHeight;
                this.height = border / 2 + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.closed = false;
                await cascade_1.default.track(this, 'closed');
                if (runCount !== this.runCount) {
                    return;
                }
                this.height = border / 2 + node.scrollHeight + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
                await cascade_1.default.track(this, 'animating');
            }
        }
    }
    render() {
        let { id, className, closed } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('closeable');
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: id, "data-closed": this.closed, "data-running": this.running, style: { height: this.height } }, this.children));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Closeable.prototype, "closed", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Closeable.prototype, "running", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Closeable.prototype, "animating", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Closeable.prototype, "height", void 0);
exports.default = Closeable;
//# sourceMappingURL=Closeable.js.map