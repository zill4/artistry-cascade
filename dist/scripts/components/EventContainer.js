"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
class EventContainer extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.eventHandler = (event) => {
            if (this.props.preventDefault) {
                event.preventDefault();
            }
            if (this.props.stopPropagation) {
                event.stopPropagation();
            }
        };
    }
    eventsToHash(events) {
        let hash = {};
        if (typeof events === 'string') {
            events = [events];
        }
        events.forEach(event => {
            hash[event] = this.eventHandler;
        });
        return hash;
    }
    render() {
        let { block, events } = this.props;
        if (block) {
            return (cascade_1.default.createElement("div", Object.assign({}, this.eventsToHash(events)), this.children));
        }
        else {
            return (cascade_1.default.createElement("span", Object.assign({}, this.eventsToHash(events)), this.children));
        }
    }
}
exports.default = EventContainer;
//# sourceMappingURL=EventContainer.js.map