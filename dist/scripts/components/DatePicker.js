"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const cascade_1 = require("cascade");
const Button_1 = require("./Button");
const ButtonGroup_1 = require("./ButtonGroup");
const Calendar_1 = require("./Calendar");
exports.Calendar = Calendar_1.default;
const MaskedInput_1 = require("./MaskedInput");
class DatePicker extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.onSelect = (date) => {
            this.props.onSelect(date);
        };
        this.onChange = (event) => {
            let value = event.target.value;
            let output = new Date(value);
            if (!isNaN(output.getTime())) {
                this.props.onSelect(output);
            }
        };
    }
    render() {
        let { id, className } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('popover-trigger');
        var date = undefined;
        switch (typeof this.props.date) {
            case 'object':
                if (this.props.date instanceof Date) {
                    date = this.props.date;
                }
                break;
            case 'string':
                date = new Date(this.props.date);
                break;
        }
        return (cascade_1.default.createElement(ButtonGroup_1.default, { id: id, className: classNames.join(' '), fill: this.props.fill },
            cascade_1.default.createElement(MaskedInput_1.default, { mask: '[[0-12]]/[[0-31]]/[[0-9999]]', value: getDateFormatted(date), fill: this.props.fill, oninput: this.onChange }),
            cascade_1.default.createElement(Button_1.default, { link: true, noTrigger: true, popoverDirection: "bottom", popoverAlign: "right", popoverFill: true, popoverSpace: true, popover: cascade_1.default.createElement(Calendar_1.default, { date: date, onSelect: this.onSelect }) }, "Calendar")));
    }
}
exports.default = DatePicker;
function getDateFormatted(date) {
    if (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var day = dd < 10 ? '0' + dd : '' + dd;
        var month = mm < 10 ? '0' + mm : '' + mm;
        return month + '/' + day + '/' + yyyy;
    }
    else {
        return '__/__/____';
    }
}
//# sourceMappingURL=DatePicker.js.map