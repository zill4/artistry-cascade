"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Breadcrumbs extends cascade_1.Component {
    render() {
        let { id, className } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('breadcrumbs');
        return (cascade_1.default.createElement("div", { className: classNames.join(' '), id: id }, this.children));
    }
}
exports.default = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map