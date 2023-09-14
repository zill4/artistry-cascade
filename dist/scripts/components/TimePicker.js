"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
function getState(value, utc) {
    let currentHour = utc ? value.getUTCHours() : value.getHours();
    let currentMinute = utc ? value.getUTCMinutes() : value.getMinutes();
    let currentMeridiem = currentHour > 11 ? true : false;
    currentHour = ((currentHour + 12 - 1) % 12) + 1;
    return {
        hours: currentHour,
        minutes: currentMinute,
        meridiem: currentMeridiem
    };
}
class TimePicker extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.onChangeHour = (event) => {
            let { value, utc } = this.props;
            let date = new Date(value ? value.toUTCString() : undefined);
            let state = getState(date, utc);
            let hours = parseInt(event.target.value);
            hours %= 12;
            hours = state.meridiem ? hours + 12 : hours;
            date.setHours(hours);
            if (this.props.onChange) {
                this.props.onChange(event, date);
            }
        };
        this.onChangeMinute = (event) => {
            let { value } = this.props;
            let date = new Date(value ? value.toUTCString() : undefined);
            let minutes = parseInt(event.target.value);
            date.setMinutes(minutes);
            if (this.props.onChange) {
                this.props.onChange(event, date);
            }
        };
        this.onChangeMeridiem = (event) => {
            let { value, utc } = this.props;
            let date = new Date(value ? value.toUTCString() : undefined);
            let state = getState(value, utc);
            let meridiemValue = event.target.value;
            let meridiem;
            switch (meridiemValue) {
                case 'AM':
                    meridiem = false;
                    break;
                case 'PM':
                    meridiem = true;
                    break;
            }
            let hours = state.hours % 12;
            hours = meridiem ? hours + 12 : hours;
            date.setHours(hours);
            if (this.props.onChange) {
                this.props.onChange(event, date);
            }
        };
    }
    render() {
        let { value, utc, minuteInterval } = this.props;
        let state = getState(value, utc);
        minuteInterval = minuteInterval || 1;
        let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let minutes = [];
        for (let index = 0; index < 60; index += minuteInterval) {
            minutes.push(index);
        }
        return (cascade_1.default.createElement("span", null,
            cascade_1.default.createElement("select", { className: "input", value: '' + state.hours, onchange: this.onChangeHour }, hours.map((hour) => cascade_1.default.createElement("option", { value: '' + hour, key: hour }, prependZero(hour)))),
            cascade_1.default.createElement("select", { className: "input", value: '' + state.minutes, onchange: this.onChangeMinute }, minutes.map((minute) => cascade_1.default.createElement("option", { value: minute, key: minute }, prependZero(minute)))),
            cascade_1.default.createElement("select", { className: "input", value: state.meridiem ? 'PM' : 'AM', onchange: this.onChangeMeridiem },
                cascade_1.default.createElement("option", { value: "AM", key: "AM" }, "AM"),
                cascade_1.default.createElement("option", { value: "PM", key: "PM" }, "PM"))));
    }
}
exports.default = TimePicker;
function prependZero(value) {
    let output = '' + value;
    if (output.length < 2) {
        return '0' + output;
    }
    else {
        return output;
    }
}
//# sourceMappingURL=TimePicker.js.map