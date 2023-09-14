"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
const Portal_1 = require("../util/Portal");
class NotificationContainer extends cascade_1.Component {
    render() {
        let { id, className, location } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('notification-container');
        if (!this.children || !this.children.length) {
            classNames.add('hidden');
        }
        switch (location) {
            case 'top':
                classNames.add('notification-top');
                break;
            case 'right':
                classNames.add('notification-right');
                break;
            case 'bottom':
                classNames.add('notification-bottom');
                break;
            case 'left':
                classNames.add('notification-left');
                break;
            case 'center-horizontal':
                classNames.add('notification-center-horizontal');
                break;
            case 'center-vertical':
                classNames.add('notification-center-vertical');
                break;
            case 'top-right':
                classNames.add('notification-top-right');
                break;
            case 'bottom-right':
                classNames.add('notification-bottom-right');
                break;
            case 'bottom-left':
                classNames.add('notification-bottom-left');
                break;
            case 'top-left':
                classNames.add('notification-top-left');
                break;
        }
        return (cascade_1.default.createElement(cascade_1.Portal, { element: Portal_1.default.getElement('layer-flyout') },
            cascade_1.default.createElement("div", { className: classNames.toString(), id: id }, this.children)));
    }
}
exports.default = NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map