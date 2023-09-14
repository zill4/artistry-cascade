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
const Button_1 = require("./Button");
const ButtonGroup_1 = require("./ButtonGroup");
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class Calendar extends cascade_1.Component {
    constructor(props, children) {
        super(props, children);
        this.increaseMonth = () => {
            this.month = (this.month + 1) % 12;
        };
        this.decreaseMonth = () => {
            this.month = (this.month + 11) % 12;
        };
        this.increaseYear = () => {
            this.year = this.year + 1;
        };
        this.decreaseYear = () => {
            this.year = this.year - 1;
        };
        this.selectDay = (day) => {
            if (this.props.onSelect) {
                this.props.onSelect(day);
            }
        };
        var date = this.props.date || new Date(Date.now());
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date;
    }
    getDays(year, month) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var days = [firstDay];
        for (var index = 2, length = lastDay.getDate(); index < length; index++) {
            days.push(new Date(year, month, index));
        }
        days.push(lastDay);
        return days;
    }
    getWeeks(year, month) {
        var days = this.getDays(year, month);
        var weeks = [];
        var week;
        if (days[0].getDay() !== 0) {
            week = [];
            weeks.push(week);
        }
        days.forEach(function (day) {
            if (day.getDay() === 0) {
                week = [];
                weeks.push(week);
            }
            week.push(day);
        });
        return weeks;
    }
    afterProps(updating) {
        if (updating) {
            if (this.props.date) {
                let year = this.props.date.getFullYear();
                let month = this.props.date.getMonth();
                if (!this.prevProps.date ||
                    this.prevProps.date.getFullYear() !== year ||
                    this.prevProps.date.getMonth() !== month) {
                    this.year = year;
                    this.month = month;
                }
            }
        }
    }
    render() {
        var weeks = this.getWeeks(this.year, this.month);
        let years = [];
        let year = this.year;
        for (let index = -100, length = 200; index <= length; index++) {
            years.push(year + index);
        }
        if (this.props.date) {
            var selectedDate = {
                year: this.props.date.getFullYear(),
                month: this.props.date.getMonth(),
                date: this.props.date.getDate()
            };
        }
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let todayTime = today.getTime();
        return (cascade_1.default.createElement("div", { className: "calendar" },
            cascade_1.default.createElement("div", { className: "calendar-title" },
                cascade_1.default.createElement(ButtonGroup_1.default, null,
                    cascade_1.default.createElement(Button_1.default, { onclick: this.decreaseYear }, "-"),
                    cascade_1.default.createElement("select", { className: "input", style: "flex-grow: 1;", value: this.year.toString(), onchange: (event) => {
                            this.year = parseInt(event.target.value);
                        } }, years.map(year => cascade_1.default.createElement("option", { value: year, key: year }, year))),
                    cascade_1.default.createElement(Button_1.default, { onclick: this.increaseYear }, "+")),
                cascade_1.default.createElement(ButtonGroup_1.default, null,
                    cascade_1.default.createElement(Button_1.default, { onclick: this.decreaseMonth }, "-"),
                    cascade_1.default.createElement("select", { className: "input", style: "flex-grow: 1;", value: this.month + 1 + '', onchange: (event) => {
                            this.month = parseInt(event.target.value) - 1;
                        } },
                        cascade_1.default.createElement("option", { value: "1" }, "January"),
                        cascade_1.default.createElement("option", { value: "2" }, "February"),
                        cascade_1.default.createElement("option", { value: "3" }, "March"),
                        cascade_1.default.createElement("option", { value: "4" }, "April"),
                        cascade_1.default.createElement("option", { value: "5" }, "May"),
                        cascade_1.default.createElement("option", { value: "6" }, "June"),
                        cascade_1.default.createElement("option", { value: "7" }, "July"),
                        cascade_1.default.createElement("option", { value: "8" }, "August"),
                        cascade_1.default.createElement("option", { value: "9" }, "September"),
                        cascade_1.default.createElement("option", { value: "10" }, "October"),
                        cascade_1.default.createElement("option", { value: "11" }, "November"),
                        cascade_1.default.createElement("option", { value: "12" }, "December")),
                    cascade_1.default.createElement(Button_1.default, { onclick: this.increaseMonth }, "+"))),
            cascade_1.default.createElement("table", null,
                cascade_1.default.createElement("thead", null,
                    cascade_1.default.createElement("tr", null,
                        cascade_1.default.createElement("th", null, "S"),
                        cascade_1.default.createElement("th", null, "M"),
                        cascade_1.default.createElement("th", null, "T"),
                        cascade_1.default.createElement("th", null, "W"),
                        cascade_1.default.createElement("th", null, "T"),
                        cascade_1.default.createElement("th", null, "F"),
                        cascade_1.default.createElement("th", null, "S"))),
                cascade_1.default.createElement("tbody", null, weeks.map((week, index, array) => {
                    return (cascade_1.default.createElement("tr", { key: this.year + ' ' + this.month + ' ' + index },
                        index === 0 && week.length < 7 ?
                            cascade_1.default.createElement("td", { colSpan: 7 - week.length })
                            : undefined,
                        week.map((day, index, array) => {
                            var selected = compareDays(selectedDate, day);
                            var current = todayTime === day.getTime();
                            let dayClassName = undefined;
                            if (selected) {
                                dayClassName = 'calendar-day-selected';
                            }
                            else if (current) {
                                dayClassName = 'calendar-day-current';
                            }
                            return (cascade_1.default.createElement("td", { key: this.year + ' ' + this.month + ' ' + index },
                                cascade_1.default.createElement("a", { className: dayClassName, onclick: this.selectDay.bind(this, day) }, day.getDate())));
                        }),
                        index > 0 && week.length < 7 ?
                            cascade_1.default.createElement("td", { colSpan: 7 - week.length })
                            : undefined));
                })))));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Calendar.prototype, "month", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Number)
], Calendar.prototype, "year", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Date)
], Calendar.prototype, "date", void 0);
exports.default = Calendar;
function compareDays(selectedDate, date) {
    if (selectedDate &&
        selectedDate.year === date.getFullYear() &&
        selectedDate.month === date.getMonth() &&
        selectedDate.date === date.getDate()) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=Calendar.js.map