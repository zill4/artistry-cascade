"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEventTarget_1 = require("./BaseEventTarget");
class NotificationUtil extends BaseEventTarget_1.default {
    constructor() {
        super(...arguments);
        this.notifications = [];
    }
    push(notification) {
        this.notifications.push(notification);
        this.sendEvent('push', this.notifications);
        this.sendEvent('update', this.notifications);
    }
    remove(notification) {
        let index = this.notifications.indexOf(notification);
        if (index >= 0) {
            this.notifications.splice(0, 1);
            this.sendEvent('remove', this.notifications);
            this.sendEvent('update', this.notifications);
        }
    }
}
exports.default = NotificationUtil;
let notificationUtil = new NotificationUtil();
notificationUtil.addEventListener('push', (notifications) => {
});
//# sourceMappingURL=NotificationUtil.js.map