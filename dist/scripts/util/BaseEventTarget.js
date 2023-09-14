"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEventTarget {
    constructor() {
        this.listeners = {};
    }
    addEventListener(type, callback) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }
    removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
            return;
        }
        var stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
            }
        }
    }
    dispatchEvent(event) {
        if (!(event.type in this.listeners)) {
            return true;
        }
        var stack = this.listeners[event.type];
        for (var i = 0, l = stack.length; i < l; i++) {
            stack[i].call(this, event);
        }
        return !event.defaultPrevented;
    }
    sendEvent(type, detail) {
        this.dispatchEvent(new CustomEvent(type, detail ? { detail: detail } : undefined));
    }
}
exports.default = BaseEventTarget;
//# sourceMappingURL=BaseEventTarget.js.map