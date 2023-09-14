"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ClassNames_1 = require("../util/ClassNames");
class Table extends cascade_1.Component {
    render() {
        let { className, id, data, headers, columns, template, templateTop, templateBottom, striped, hoverable, form } = this.props;
        let classNames = new ClassNames_1.default(className, 'table');
        classNames.addTest('table-striped', striped);
        classNames.addTest('table-hoverable', hoverable);
        classNames.addTest('table-form', form);
        let renderedTitles = undefined;
        if (headers) {
            renderedTitles = headers.map((header, index) => {
                return (cascade_1.default.createElement("th", { key: index }, header));
            });
        }
        else if (columns) {
            renderedTitles = columns.map((column, index) => {
                return (cascade_1.default.createElement("th", { key: index, className: column.action ? 'action-column' : undefined }, typeof column.header === 'function' ?
                    column.header() :
                    column.header));
            });
        }
        let renderedBody;
        if (data) {
            if (template) {
                renderedBody = data.map((item, index) => template(item, index));
            }
            else if (columns) {
                renderedBody = data.map((item, index) => (cascade_1.default.createElement("tr", { key: index }, columns.map((column, index) => {
                    if (column.template) {
                        return column.template(item);
                    }
                    else if (column.property) {
                        return cascade_1.default.createElement("td", { key: 'td-' + index }, item[column.property]);
                    }
                    else {
                        return cascade_1.default.createElement("td", { key: 'td-' + index });
                    }
                }))));
            }
            else {
                renderedBody = data.map((item, index) => (cascade_1.default.createElement("tr", { key: index }, Object.values(item).map((value, index) => cascade_1.default.createElement("td", { key: index }, value)))));
            }
        }
        return (cascade_1.default.createElement("table", { className: classNames.toString(), id: id },
            renderedTitles ?
                cascade_1.default.createElement("thead", null,
                    cascade_1.default.createElement("tr", null, renderedTitles))
                : undefined,
            cascade_1.default.createElement("tbody", { className: this.props.list ? 'list' : '' },
                typeof templateTop === 'function' ? templateTop() : templateTop,
                renderedBody,
                typeof templateBottom === 'function' ? templateBottom() : templateBottom),
            cascade_1.default.createElement("tfoot", null,
                cascade_1.default.createElement("tr", null))));
    }
}
exports.default = Table;
//# sourceMappingURL=Table.js.map