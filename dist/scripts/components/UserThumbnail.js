"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const DepthStack_1 = require("../util/DepthStack");
const Popover_1 = require("./Popover");
class UserThumbnail extends cascade_1.Component {
    close(event) {
        if (this.props.onPopoverClose) {
            this.props.onPopoverClose(event);
        }
    }
    async afterProps(mounted) {
        if (this.props.popover) {
            if (!this.closeHandle) {
                this.closeHandle = this.close.bind(this);
            }
            if (!mounted) {
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
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('thumbnail');
        switch (this.props.size) {
            case 'small':
                classNames.push('thumbnail-user-small');
                break;
            case 'large':
                classNames.push('thumbnail-user-large');
                break;
            default:
                classNames.push('thumbnail-user-medium');
                break;
        }
        let thumbnail = this.props.src ?
            (cascade_1.default.createElement("img", { className: classNames.join(' '), src: this.props.src })) : (cascade_1.default.createElement("span", { className: classNames.join(' ') }, this.props.placeholder));
        if (this.props.popover) {
            let popover = (cascade_1.default.createElement(Popover_1.default, { align: this.props.popoverAlign, direction: this.props.popoverDirection, open: !this.props.popoverMenu ? this.props.popoverOpen : undefined, space: this.props.popoverSpace, preventClick: true }, typeof this.props.popover === 'function' ?
                this.props.popover() :
                this.props.popover));
            if (this.props.popoverMenu) {
                let triggerClassNames = ['clickable', 'popover-trigger'];
                if (this.props.popoverOpen) {
                    triggerClassNames.push('popover-open');
                }
                else {
                    triggerClassNames.push('popover-closed');
                }
                if (this.props.menuBarTop) {
                    triggerClassNames.push('popover-menu-bar-top');
                }
                return (cascade_1.default.createElement("span", { role: "button", className: triggerClassNames.join(' '), id: this.props.id, onclick: this.props.onclick },
                    thumbnail,
                    popover));
            }
            else {
                return (cascade_1.default.createElement("span", { className: "popover-trigger", id: this.props.id, onclick: this.props.onclick },
                    thumbnail,
                    popover));
            }
        }
        else {
            thumbnail.props.id = this.props.id;
            return thumbnail;
        }
    }
}
exports.default = UserThumbnail;
//# sourceMappingURL=UserThumbnail.js.map