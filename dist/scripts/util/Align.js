"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignClass = void 0;
function alignClass(align, classNames) {
    switch (align) {
        case 'start':
            classNames.add('align-start');
            break;
        case 'end':
            classNames.add('align-end');
            break;
        case 'left':
            classNames.add('align-left');
            break;
        case 'right':
            classNames.add('align-right');
            break;
        case 'center':
            classNames.add('align-center');
            break;
        case 'justify':
            classNames.add('align-justify');
            break;
        case 'initial':
            classNames.add('align-initial');
            break;
        case 'inherit':
            classNames.add('align-inherit');
            break;
    }
}
exports.alignClass = alignClass;
//# sourceMappingURL=Align.js.map