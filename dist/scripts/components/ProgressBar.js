"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class ProgressBar extends cascade_1.Component {
    render() {
        let { id, className, value, min, max, showPercentage, decimal, decimalFixed, type } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('progress-bar');
        if (this.children.length) {
            classNames.push('progress-bar-content');
        }
        min = parseNumber(min);
        max = parseNumber(max);
        let minOrZero = min || 0;
        let maxOrOne = max || 1;
        if (value < minOrZero) {
            value = minOrZero;
        }
        if (value > maxOrOne) {
            value = maxOrOne;
        }
        let percentage = 100 * (value - minOrZero) / (maxOrOne - minOrZero);
        let text = showPercentage ? numberToPercentage(percentage, decimal, decimalFixed) : undefined;
        switch (type) {
            case 'success':
                classNames.push('progress-bar-success');
                break;
            case 'info':
                classNames.push('progress-bar-info');
                break;
            case 'warning':
                classNames.push('progress-bar-warning');
                break;
            case 'danger':
                classNames.push('progress-bar-danger');
                break;
        }
        let style = { "--progress-bar-progress": percentage + '%' };
        return (cascade_1.default.createElement("div", { id: id, className: classNames.join(' '), role: "progressbar", "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max, "aria-valuetext": text, style: style }, this.children ?
            cascade_1.default.createElement("div", null, this.children) :
            undefined));
    }
}
exports.default = ProgressBar;
function parseNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else {
        value = parseFloat(value);
        if (!isNaN(value) && isFinite(value)) {
            return value;
        }
        else {
            return undefined;
        }
    }
}
function numberToPercentage(value, decimals, fixed) {
    if (fixed || !Number.isInteger(value)) {
        return value.toFixed(decimals || 0) + '%';
    }
    else {
        return value + '%';
    }
}
//# sourceMappingURL=ProgressBar.js.map