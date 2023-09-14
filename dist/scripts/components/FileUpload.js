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
class FileUpload extends cascade_1.Component {
    constructor() {
        super(...arguments);
        this.dragging = false;
        this.uploading = false;
        this.fileInput = new cascade_1.Ref();
        this.handleFiles = async (files) => {
            this.uploading = true;
            await this.props.onSelect(files);
            this.uploading = false;
        };
        this.click = () => {
            this.fileInput.current.click();
        };
        this.select = () => {
            let fileInput = this.fileInput.current;
            let files = fileInput.files;
            if (files && files.length) {
                this.handleFiles(files);
            }
        };
        this.drop = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragLeave(event);
            let files = event.dataTransfer.files;
            if (files && files.length) {
                this.handleFiles(files);
            }
        };
        this.dragEnter = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragging = true;
        };
        this.dragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragging = false;
        };
    }
    render() {
        let { id, className, text, value } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('file-upload');
        return (cascade_1.default.createElement("div", { id: id, className: classNames.join(' '), ondragover: this.dragEnter, ondragenter: this.dragEnter, ondragleave: this.dragLeave, ondragend: this.dragLeave, ondrop: this.drop, onclick: this.click, "data-dragging": this.dragging, "data-uploading": this.uploading },
            cascade_1.default.createElement("input", { type: "file", onchange: this.select, value: value, multiple: true, ref: this.fileInput }),
            text || 'Click or Drag and Drop to upload'));
    }
}
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], FileUpload.prototype, "dragging", void 0);
__decorate([
    cascade_1.observable,
    __metadata("design:type", Boolean)
], FileUpload.prototype, "uploading", void 0);
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map