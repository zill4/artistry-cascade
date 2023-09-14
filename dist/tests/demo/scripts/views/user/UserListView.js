"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
const UserForm_1 = require("./UserForm");
const UserView_1 = require("./UserView");
class UserListView extends cascade_1.Component {
    render() {
        let { viewModel } = this.props;
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Users", headerSpace: true },
            cascade_1.default.createElement("table", { className: "table" },
                cascade_1.default.createElement("thead", null,
                    cascade_1.default.createElement("tr", null,
                        cascade_1.default.createElement("th", null, "First Name"),
                        cascade_1.default.createElement("th", null, "Last Name"),
                        cascade_1.default.createElement("th", null))),
                cascade_1.default.createElement("tbody", null,
                    cascade_1.default.createElement(UserForm_1.default, { key: "user-form-component", viewModel: viewModel }),
                    viewModel.users.map(user => cascade_1.default.createElement(UserView_1.default, { user: user, viewModel: viewModel }))))));
    }
}
exports.default = UserListView;
//# sourceMappingURL=UserListView.js.map