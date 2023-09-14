"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../../../scripts/modules/ArtistryCascade");
class TableView extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.select = async (files) => {
            console.log('files:', files);
            return undefined;
        };
    }
    render() {
        return (cascade_1.default.createElement(ArtistryCascade_1.Section, { header: "File Upload", headerSpace: true, space: true },
            cascade_1.default.createElement(ArtistryCascade_1.FileUpload, { onSelect: this.select })));
    }
}
exports.default = TableView;
//# sourceMappingURL=FileUploadView.js.map