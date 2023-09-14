"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Icon extends cascade_1.Component {
    render() {
        let { pack, name } = this.props;
        let iconName;
        if (pack) {
            iconName = '#' + pack + '___' + name;
        }
        else {
            iconName = '#' + name;
        }
        return (cascade_1.default.createElement("i", { className: "icon" },
            cascade_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" },
                cascade_1.default.createElement("use", { href: iconName }))));
    }
}
exports.default = Icon;
//# sourceMappingURL=Icon.js.map