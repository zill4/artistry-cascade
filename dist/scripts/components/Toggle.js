"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Toggle extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('toggle');
        delete this.props.className;
        return (cascade_1.default.createElement("div", { className: classNames.join(' ') },
            cascade_1.default.createElement("label", null,
                cascade_1.default.createElement("div", { className: "toggle-box" },
                    cascade_1.default.createElement("input", Object.assign({ type: "checkbox" }, this.props)),
                    cascade_1.default.createElement("div", { className: "toggle-button" }, "\u00A0")))));
    }
}
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map