"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Thumbnail extends cascade_1.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('thumbnail');
        return (cascade_1.default.createElement("img", { className: classNames.join(' '), id: this.props.id, src: this.props.src }));
    }
}
exports.default = Thumbnail;
//# sourceMappingURL=Thumbnail.js.map