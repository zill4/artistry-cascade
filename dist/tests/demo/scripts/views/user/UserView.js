"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class UserView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.removeUser = () => {
            this.props.viewModel.removeUser(this.props.user);
        };
    }
    render() {
        let { user, viewModel } = this.props;
        return (cascade_1.default.createElement("tr", null,
            cascade_1.default.createElement("td", null, user.firstName),
            cascade_1.default.createElement("td", null, user.lastName),
            cascade_1.default.createElement("td", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "danger", onclick: this.removeUser }, "Remove"))));
    }
}
exports.default = UserView;
//# sourceMappingURL=UserView.js.map