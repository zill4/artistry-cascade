"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class Pager extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.onClickBack = (event) => {
            event.preventDefault();
            if (this.props.index > 0) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(this.props.index - 1, event);
                }
            }
        };
        this.onClickForward = (event) => {
            event.preventDefault();
            if (this.props.index < this.props.count - 1) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(this.props.index + 1, event);
                }
            }
        };
        this.onClickStart = (event) => {
            event.preventDefault();
            if (this.props.index > 0) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(0, event);
                }
            }
        };
        this.onClickEnd = (event) => {
            event.preventDefault();
            if (this.props.index < this.props.count - 1) {
                if (this.props.onClickEnd) {
                    this.props.onClickEnd(event);
                }
            }
        };
    }
    onClickIndex(index, event) {
        event.preventDefault();
        if (this.props.onClickIndex) {
            this.props.onClickIndex(index, event);
        }
    }
    render() {
        let { className, id, index, count, showCount, showArrows, showEnds, zeroIndexed } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('pager');
        let low = Math.max(index - Math.floor(showCount / 2), 0);
        let high = Math.min(low + showCount, count);
        if (high - low < showCount) {
            low = Math.max(high - showCount, 0);
        }
        let offset = zeroIndexed ? 0 : 1;
        let pagers = [];
        for (var pagerIndex = low; pagerIndex < high; pagerIndex++) {
            let active = pagerIndex === index;
            pagers.push(cascade_1.default.createElement("li", { key: pagerIndex.toString(), className: active ? 'pager-active' : undefined },
                cascade_1.default.createElement("a", { href: "#", onclick: this.onClickIndex.bind(this, pagerIndex) }, pagerIndex + offset)));
        }
        return (cascade_1.default.createElement("ul", { className: classNames.join(' '), id: id },
            showEnds ?
                cascade_1.default.createElement("li", { key: "start", className: index === 0 ? 'pager-disabled' : undefined },
                    cascade_1.default.createElement("a", { href: "#", onclick: this.onClickStart }, "<<"))
                : undefined,
            showArrows ?
                cascade_1.default.createElement("li", { key: "back", className: index === 0 ? 'pager-disabled' : undefined },
                    cascade_1.default.createElement("a", { href: "#", onclick: this.onClickBack }, "<"))
                : undefined,
            pagers,
            showArrows ?
                cascade_1.default.createElement("li", { key: "next", className: index >= count - 1 ? 'pager-disabled' : undefined },
                    cascade_1.default.createElement("a", { href: "#", onclick: this.onClickForward }, ">"))
                : undefined,
            showEnds ?
                cascade_1.default.createElement("li", { key: "end", className: index >= count - 1 ? 'pager-disabled' : undefined },
                    cascade_1.default.createElement("a", { href: "#", onclick: this.onClickEnd }, ">>"))
                : undefined));
    }
}
exports.default = Pager;
//# sourceMappingURL=Pager.js.map