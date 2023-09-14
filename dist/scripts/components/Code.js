"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Code extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('code');
        return (cascade_1.default.createElement("pre", Object.assign({ className: classNames.join(' ') }, this.props), this.children ?
            this.children.map(child => cascade_1.default.createElement("code", null, child))
            : undefined));
    }
}
exports.default = Code;
//# sourceMappingURL=Code.js.map