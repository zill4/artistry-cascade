"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepthStack {
    static push(close, confirm) {
        this.items.push({
            close: close,
            confirm: confirm
        });
    }
    static remove(close) {
        let index = this.items.findIndex(closeItem => {
            return (closeItem.close === close) || (closeItem.confirm === close);
        });
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    static close(event) {
        let item = this.items[this.items.length - 1];
        if (item && item.close) {
            let result = item.close(event);
            if (result !== false) {
                DepthStack.remove(item.close);
            }
        }
    }
    static confirm(event) {
        let item = this.items[this.items.length - 1];
        if (item && item.confirm) {
            let result = item.confirm(event);
            if (result !== false) {
                DepthStack.remove(item.confirm);
            }
        }
    }
    static init() {
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 13:
                    this.confirm(event);
                    break;
                case 27:
                    this.close(event);
                    break;
                case 32:
                    break;
                default:
                    break;
            }
        });
        window.addEventListener('blur', (event) => {
            this.close(event);
        });
        window.onclick = (event) => {
            this.close(event);
        };
    }
    static blur() {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }
}
exports.default = DepthStack;
DepthStack.items = [];
//# sourceMappingURL=DepthStack.js.map