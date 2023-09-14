"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Portal {
    static addElement(name, element) {
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if (!element) {
            throw new Error('No Portal element found');
        }
        this.elements[name] = element;
    }
    static removeElement(name) {
        delete this.elements[name];
    }
    static getElement(name) {
        if (!this.elements[name]) {
            throw new Error('No Portal element found');
        }
        return this.elements[name];
    }
}
exports.default = Portal;
Portal.elements = {};
//# sourceMappingURL=Portal.js.map