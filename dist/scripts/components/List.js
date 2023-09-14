"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class List extends cascade_1.Component {
    render() {
        let { className, id, data, space, selected, active, template } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('list');
        if (space) {
            classNames.push('list-space');
        }
        let hash = {};
        if (selected) {
            for (let x of selected) {
                hash[x] = true;
            }
        }
        return (cascade_1.default.createElement("ul", { className: classNames.join(' '), id: id }, data ? data.map((item, index) => {
            let className = undefined;
            if (active === index) {
                className = 'list-option-active';
            }
            else if (hash[index]) {
                className = 'list-option-selected';
            }
            return (cascade_1.default.createElement("li", { key: index, className: className }, template ? template(item, index) : item));
        }) : undefined));
    }
}
exports.default = List;
//# sourceMappingURL=List.js.map