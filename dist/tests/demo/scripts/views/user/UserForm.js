"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
const User_1 = require("../../models/User");
class UserForm extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.setFirstNameInput = (firstNameInput) => {
            this.props.viewModel.firstNameInput = firstNameInput;
        };
        this.onKeyDown = (event) => {
            switch (event.keyCode) {
                case 13:
                    event.preventDefault();
                    this.props.viewModel.addUser();
                    this.props.viewModel.firstNameInput.focus();
                    break;
                case 27:
                    event.preventDefault();
                    this.props.viewModel.user = new User_1.default('', '');
                    this.props.viewModel.firstNameInput.focus();
                    break;
            }
        };
    }
    addUser(event) {
        event.preventDefault();
        this.props.viewModel.addUser();
        this.props.viewModel.firstNameInput.focus();
    }
    onChange(prop, event) {
        this.props.viewModel.user[prop] = event.target.value;
    }
    render() {
        let { viewModel } = this.props;
        let { user } = viewModel;
        let valid = user['firstName-valid'] && user['lastName-valid'];
        return (cascade_1.default.createElement("tr", { onkeydown: this.onKeyDown },
            cascade_1.default.createElement("td", null,
                cascade_1.default.createElement("input", { type: "text", className: "input", form: "user-form", name: "firstName", value: user.firstName, oninput: this.onChange.bind(this, 'firstName'), ref: this.setFirstNameInput })),
            cascade_1.default.createElement("td", null,
                cascade_1.default.createElement("input", { type: "text", className: "input", form: "user-form", name: "lastName", value: user.lastName, oninput: this.onChange.bind(this, 'lastName') })),
            cascade_1.default.createElement("td", null,
                cascade_1.default.createElement(ArtistryCascade_1.Button, { type: "submit", form: "user-form", name: "submit", onclick: this.addUser.bind(this), disabled: !valid }, "Add"),
                cascade_1.default.createElement("form", { id: "user-form", onsubmit: this.addUser.bind(this) }))));
    }
}
exports.default = UserForm;
//# sourceMappingURL=UserForm.js.map