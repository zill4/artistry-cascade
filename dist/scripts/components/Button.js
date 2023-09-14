"use strict";
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
const Popover_1 = require("./Popover");
const DepthStack_1 = require("../util/DepthStack");
class Button extends cascade_1.Component {
    close(event) {
        if (this.props.onPopoverClose) {
            this.props.onPopoverClose(event);
        }
    }
    afterProps(updating) {
        if (this.props.popover) {
            if (!this.closeHandle) {
                this.closeHandle = this.close.bind(this);
            }
            if (!updating) {
                if (this.props.popoverOpen) {
                    DepthStack_1.default.push(this.closeHandle);
                }
            }
            else {
                if (this.props.popoverOpen) {
                    DepthStack_1.default.push(this.closeHandle);
                }
                else {
                    DepthStack_1.default.remove(this.closeHandle);
                }
            }
        }
    }
    afterDispose() {
        if (this.props.popoverOpen) {
            DepthStack_1.default.remove(this.closeHandle);
        }
    }
    render() {
        const _a = this.props, { id, className, type, theme, displaySize, display, fill, down, lockContent, locked, tooltip, tooltipDirection, tooltipOpen, popover, popoverAlign, popoverDirection, popoverMenu, popoverOpen, popoverFill, popoverSpace, onPopoverClose, link, noCaps, noTrigger, noWrap, noFocus } = _a, props = __rest(_a, ["id", "className", "type", "theme", "displaySize", "display", "fill", "down", "lockContent", "locked", "tooltip", "tooltipDirection", "tooltipOpen", "popover", "popoverAlign", "popoverDirection", "popoverMenu", "popoverOpen", "popoverFill", "popoverSpace", "onPopoverClose", "link", "noCaps", "noTrigger", "noWrap", "noFocus"]);
        let classNames = className ? [className] : [];
        let injectedProps = {};
        classNames.push('button');
        switch (theme) {
            case 'primary':
                classNames.push('button-primary');
                break;
            case 'danger':
                classNames.push('button-danger');
                break;
        }
        switch (displaySize) {
            case 'small':
                classNames.push('button-small');
                break;
            case 'large':
                classNames.push('button-large');
                break;
        }
        switch (display) {
            case 'textonly':
                classNames.push('button-textonly');
                break;
            case 'outline':
                classNames.push('button-outline');
                break;
            case 'underline':
                classNames.push('button-underline');
                break;
        }
        if (fill) {
            classNames.push('fill-width');
        }
        if (noCaps) {
            classNames.push('button-no-caps');
        }
        if (noWrap) {
            classNames.push('button-nowrap');
        }
        if (noFocus) {
            classNames.push('button-no-focus');
        }
        let buttonType = type || 'button';
        if (typeof tooltip !== 'undefined') {
            injectedProps['aria-label'] = tooltip;
            classNames.push('tooltip');
            switch (tooltipDirection) {
                case 'top':
                    classNames.push('tooltip-top');
                    break;
                case 'right':
                    classNames.push('tooltip-right');
                    break;
                case 'bottom':
                    classNames.push('tooltip-bottom');
                    break;
                case 'left':
                    classNames.push('tooltip-left');
                    break;
                default:
                    classNames.push('tooltip-top');
                    break;
            }
            if (tooltipOpen) {
                classNames.push('tooltip-open');
            }
        }
        let popOver;
        if (typeof popover !== 'undefined') {
            if (!noTrigger) {
                classNames.push('popover-trigger');
            }
            if (popoverMenu) {
                if (popoverOpen) {
                    classNames.push('popover-open');
                    if (!down) {
                        classNames.push('button-down');
                    }
                }
                else {
                    classNames.push('popover-closed');
                }
            }
            popOver = (cascade_1.default.createElement(Popover_1.default, { align: popoverAlign, direction: popoverDirection, open: !popoverMenu ? popoverOpen : undefined, fill: popoverFill, space: popoverSpace, preventClick: true }, typeof popover === 'function' ?
                popover() :
                popover));
        }
        if (down) {
            classNames.push('button-down');
        }
        if (lockContent) {
            classNames.push('button-lockable');
        }
        if (locked) {
            classNames.push('button-locked');
            injectedProps['disabled'] = true;
        }
        return !(popoverMenu || link) ?
            (cascade_1.default.createElement("button", Object.assign({}, props, { className: classNames.join(' '), id: id, type: buttonType }, injectedProps),
                popOver,
                lockContent ?
                    [
                        cascade_1.default.createElement("div", { className: "button-text" }, this.children),
                        cascade_1.default.createElement("div", { className: "button-spinner" }, lockContent)
                    ] :
                    this.children)) : (cascade_1.default.createElement("a", Object.assign({}, props, { className: classNames.join(' '), id: id }, injectedProps),
            popOver,
            lockContent ?
                [
                    cascade_1.default.createElement("div", { className: "button-text" }, this.children),
                    cascade_1.default.createElement("div", { className: "button-spinner" }, lockContent)
                ] :
                this.children));
    }
}
exports.default = Button;
//# sourceMappingURL=Button.js.map