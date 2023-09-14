"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridConfig = void 0;
const cascade_1 = require("cascade");
class Grid extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        grid(classNames, this.props.columns, this.props.screenSize, this.props.space);
        if (this.props.fillWidth) {
            classNames.push('fill-width');
        }
        return cascade_1.default.createElement("div", { className: classNames.join(' '), id: this.props.id }, this.children);
    }
}
exports.default = Grid;
function grid(classNames, columns, screenSize, space) {
    columns = columns || 12;
    switch (screenSize) {
        case 'x-small':
            classNames.push('grid-xs-' + columns);
            break;
        case 'small':
            classNames.push('grid-sm-' + columns);
            break;
        case 'medium':
            classNames.push('grid-md-' + columns);
            break;
        case 'large':
            classNames.push('grid-lg-' + columns);
            break;
        case 'x-large':
            classNames.push('grid-xl-' + columns);
            break;
        default:
            classNames.push('grid-' + columns);
            break;
    }
    if (space) {
        classNames.push('grid-space');
    }
}
function gridConfig(classNames, props) {
    grid(classNames, props.gridColumns, props.gridSize, props.gridSpace);
}
exports.gridConfig = gridConfig;
//# sourceMappingURL=Grid.js.map