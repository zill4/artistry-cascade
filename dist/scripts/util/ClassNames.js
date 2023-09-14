"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassNames {
    constructor(...names) {
        this.parts = {};
        for (let index = 0, length = names.length; index < length; index++) {
            let name = names[index];
            if (name) {
                this.parts[name] = name;
            }
        }
    }
    add(...names) {
        for (let index = 0, length = names.length; index < length; index++) {
            let name = names[index];
            this.parts[name] = name;
        }
    }
    remove(...names) {
        for (let index = 0, length = names.length; index < length; index++) {
            let name = names[index];
            delete this.parts[name];
        }
    }
    addTest(name, show) {
        if (show) {
            if (name instanceof Array) {
                this.add(...name);
            }
            else {
                this.add(name);
            }
        }
    }
    toString() {
        return Object.values(this.parts).join(' ');
    }
    static test(name, show) {
        let output;
        if (show) {
            if (name instanceof Array) {
                output = name.join(' ');
            }
            else {
                output = name;
            }
        }
        else {
            output = '';
        }
        return output;
    }
    static classListAdd(element, className) {
        className = className.trim();
        let classNames = element.className.split(' ');
        let hash = {};
        for (let index = 0, length = classNames.length; index < length; index++) {
            let name = classNames[index].trim();
            if (name) {
                hash[name] = name;
            }
        }
        hash[className] = className;
        classNames = Object.keys(hash);
        element.className = Object.keys(hash).join(' ');
    }
    static classListRemove(element, className) {
        className = className.trim();
        let classNames = element.className.split(' ');
        let hash = {};
        for (let index = 0, length = classNames.length; index < length; index++) {
            let name = classNames[index].trim();
            if (name) {
                hash[name] = name;
            }
        }
        delete hash[className];
        element.className = Object.keys(hash).join(' ');
    }
}
exports.default = ClassNames;
//# sourceMappingURL=ClassNames.js.map