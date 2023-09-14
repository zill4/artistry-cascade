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
const Button_1 = require("./Button");
const Grid_1 = require("./Grid");
class Section extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.running = false;
        this.animating = false;
        this.height = undefined;
        this.runCount = 0;
        this.close = () => {
            if (this.props.onClose) {
                let closed = typeof this.props.closed !== 'undefined' ?
                    this.props.closed :
                    (this.closed || false);
                this.props.onClose(closed);
            }
            else {
                this.closed = !this.closed;
            }
        };
        this.transitionEnd = (event) => {
            if (event.propertyName === 'height') {
                let animating = this.animating;
                if (!animating) {
                    if (this.props.closed) {
                        this.height = undefined;
                        this.running = false;
                        this.closed = true;
                    }
                    else {
                        this.height = undefined;
                        this.running = false;
                        this.closed = false;
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
        if (updating && this.props.closed !== this.prevProps.closed) {
            let node = this.element;
            let header = node.childNodes[0];
            let content = node.childNodes[1];
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
                this.height = header.offsetHeight + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
                await cascade_1.default.track(this, 'animating');
            }
            else {
                var border = node.offsetHeight - node.clientHeight;
                this.height = border / 2 + header.offsetHeight + content.offsetHeight + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.closed = false;
                await cascade_1.default.track(this, 'closed');
                if (runCount !== this.runCount) {
                    return;
                }
                this.height = border / 2 + header.offsetHeight + content.offsetHeight + 'px';
                await cascade_1.default.track(this, 'height');
                if (runCount !== this.runCount) {
                    return;
                }
                this.animating = false;
                await cascade_1.default.track(this, 'animating');
            }
        }
    }
    afterDispose() {
        this.runCount++;
    }
    render() {
        let _a = this.props, { id, className, header, footer, closeable, closed, lockable, locked, space, headerSpace, footerSpace, relative, grid, gridColumns, gridSize, gridSpace } = _a, props = __rest(_a, ["id", "className", "header", "footer", "closeable", "closed", "lockable", "locked", "space", "headerSpace", "footerSpace", "relative", "grid", "gridColumns", "gridSize", "gridSpace"]);
        let classNames = className ? [className] : [];
        classNames.push('section');
        if (this.closed) {
            classNames.push('section-closed');
        }
        if (this.running) {
            classNames.push('section-run');
        }
        let innerClassNames = ['section-content'];
        if (lockable) {
            innerClassNames.push('lock-contents');
        }
        if (locked) {
            innerClassNames.push('locked');
        }
        if (space) {
            innerClassNames.push('section-content-space');
        }
        if (relative) {
            innerClassNames.push('section-content-relative');
        }
        if (grid) {
            Grid_1.gridConfig(innerClassNames, this.props);
        }
        return (cascade_1.default.createElement("section", Object.assign({ className: classNames.join(' '), id: id, style: {
                height: this.height
            }, onTransitionEnd: this.transitionEnd }, props),
            cascade_1.default.createElement("header", { className: headerSpace ? 'section-title' : undefined },
                header,
                closeable ?
                    cascade_1.default.createElement(Button_1.default, { className: "section-toggle", onclick: this.close }, "-")
                    : undefined),
            cascade_1.default.createElement("div", { className: innerClassNames.join(' ') }, this.children),
            footer ?
                cascade_1.default.createElement("footer", { className: footerSpace ? 'section-title' : undefined }, footer) :
                undefined));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Section.prototype, "closed", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Section.prototype, "running", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], Section.prototype, "animating", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", String)
], Section.prototype, "height", void 0);
exports.default = Section;
//# sourceMappingURL=Section.js.map