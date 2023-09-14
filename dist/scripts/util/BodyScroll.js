"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BodyScroll {
    static lock(hideScroll) {
        let body = document.body;
        let root = document.querySelector(this.rootSelector);
        if (root) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || body.scrollTop || root.scrollTop;
            let currentHideScroll = body.getAttribute('data-lock') === 'hide';
            this.lockStack.push({
                scrollTop: scrollTop,
                hideScroll: currentHideScroll
            });
            if (this.lockStack.length === 1) {
                root.setAttribute('data-status', 'locked');
            }
            root.scrollTop = scrollTop;
            if (hideScroll) {
                body.setAttribute('data-lock', 'hide');
                root.setAttribute('data-pad-scroll', 'true');
            }
            else {
                body.setAttribute('data-lock', '');
                root.setAttribute('data-pad-scroll', '');
            }
        }
    }
    static unlock() {
        let body = document.body;
        let root = document.querySelector(this.rootSelector);
        if (root) {
            let lockConfig = this.lockStack.pop();
            if (!this.lockStack.length) {
                root.setAttribute('data-status', '');
            }
            if (lockConfig) {
                body.scrollTop = lockConfig.scrollTop;
                if (lockConfig.hideScroll) {
                    body.setAttribute('data-lock', 'hide');
                    root.setAttribute('data-pad-scroll', 'true');
                }
                else {
                    body.setAttribute('data-lock', '');
                    root.setAttribute('data-pad-scroll', '');
                }
                document.documentElement.scrollTop = lockConfig.scrollTop;
            }
        }
    }
    static init() {
        let body = document.body;
        body.classList.add(this.bodyLockClass);
        body.setAttribute('data-lock', 'init');
        this.scrollbarWidth = getComputedStyle(body).marginRight;
        body.setAttribute('data-lock', '');
        body.style.setProperty('--scrollbar-width', this.scrollbarWidth);
        let root = document.querySelector(this.rootSelector);
        if (root) {
            root.setAttribute('data-status', '');
        }
        window.addEventListener('beforeunload', () => {
            this.unlock();
        });
    }
}
exports.default = BodyScroll;
BodyScroll.lockStack = [];
BodyScroll.rootSelector = '.layer-root';
BodyScroll.bodyLockClass = 'body-scroll';
//# sourceMappingURL=BodyScroll.js.map