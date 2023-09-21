"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class FormView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.date = new Date(Date.now());
        this.amount = 0;
        this.selectValue = 'a';
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "Form", headerSpace: true },
            cascade_1.default.createElement(ArtistryCascade_1.Form, { size: "small", onEnter: (event) => {
                    event.preventDefault();
                    console.log('enter');
                }, onEscape: (event) => {
                    event.preventDefault();
                    console.log('escape');
                } },
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Value" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Text", text: "Text" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true, required: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Success", theme: "success", text: "Success" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Info", theme: "info", text: "Info" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Warning", theme: "warning", text: "Warning" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Error", theme: "danger", text: "Error" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { type: "text", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
                cascade_1.default.createElement(ArtistryCascade_1.FormText, { fill: true },
                    cascade_1.default.createElement("h2", null, "Masked Inputs")),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Time" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "[[0-23]]:[[0-59]]", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Phone" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "(999) 999-9999", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Color" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "#000000", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
                cascade_1.default.createElement(ArtistryCascade_1.FormText, { fill: true },
                    cascade_1.default.createElement("h3", null, "Test Examples")),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "99999" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "99999", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "aaaaa" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "aaaaa", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "nnnnn" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "nnnnn", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "[[0-23]]00000" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "[[0-23]]00000", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "99aa99aa99aa" },
                    cascade_1.default.createElement(ArtistryCascade_1.Input, { mask: "99aa99aa99aa", fill: true })),
                cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
                cascade_1.default.createElement(ArtistryCascade_1.FormText, { fill: true },
                    cascade_1.default.createElement("h3", null, "Advanced Input")),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Select", nonLabel: true },
                    cascade_1.default.createElement(ArtistryCascade_1.Select, { data: ['a', 'b', 'c'], model: this, modelProp: "selectValue" })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Time Input" },
                    cascade_1.default.createElement(ArtistryCascade_1.TimeInput, { fill: true, value: this.date.toUTCString(), oninput: (event) => {
                            let value = event.target.value;
                            let date = new Date(this.date);
                            let parts = value.split(':').map(part => parseInt(part));
                            if (parts) {
                                date.setHours(parts[0], parts[1]);
                            }
                            this.date = date;
                            console.log(date);
                        } })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Time Picker", nonLabel: true },
                    cascade_1.default.createElement(ArtistryCascade_1.TimePicker, { value: this.date, onChange: (event, date) => {
                            event;
                            if (date) {
                                this.date = date;
                                console.log(date);
                            }
                        } })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Time with Seconds" },
                    cascade_1.default.createElement(ArtistryCascade_1.TimeInput, { fill: true, seconds: true, value: this.date.toUTCString(), oninput: (event) => {
                            let value = event.target.value;
                            let date = new Date(this.date);
                            let parts = value.split(':').map(part => parseInt(part));
                            if (parts) {
                                date.setHours(parts[0], parts[1], parts[2]);
                            }
                            this.date = date;
                            console.log(date);
                        } })),
                cascade_1.default.createElement(ArtistryCascade_1.FormGroup, { label: "Amount", nonLabel: true },
                    cascade_1.default.createElement(ArtistryCascade_1.AmountInput, { value: this.amount, minimum: 1, maximum: 10, onChange: (value) => {
                            this.amount = value;
                        } })),
                cascade_1.default.createElement(ArtistryCascade_1.Divider, null),
                cascade_1.default.createElement(ArtistryCascade_1.ActionBar, null,
                    cascade_1.default.createElement(ArtistryCascade_1.Button, null, "Cancel"),
                    cascade_1.default.createElement(ArtistryCascade_1.Button, { theme: "primary" }, "Save")))));
    }
}
exports.default = FormView;
__decorate([
    cascade_1.observable,
    __metadata("design:type", Date)
], FormView.prototype, "date", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], FormView.prototype, "amount", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Object)
], FormView.prototype, "selectValue", void 0);
//# sourceMappingURL=FormView.js.map