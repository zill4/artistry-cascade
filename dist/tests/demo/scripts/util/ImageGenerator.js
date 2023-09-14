"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageGenerator {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
    }
    init(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    drawPlaceholder() {
        let width = this.canvas.width;
        let height = this.canvas.height;
        this.drawRect('#CCCCCC', 0, 0, width, height);
        this.drawLine('#EEEEEE', 2, 0, 0, width, height);
        this.drawLine('#EEEEEE', 2, 0, height, width, 0);
        let size = Math.min(width, height) * 0.15;
        this.drawText('#969696', size + 'px Arial', width + ' x ' + height, width / 2, height / 2);
    }
    toString() {
        return this.canvas.toDataURL();
    }
    drawRect(color, x0, y0, x1, y1) {
        let ctx = this.ctx;
        ctx.fillStyle = color;
        ctx.fillRect(x0, y0, x1, y1);
    }
    drawLine(color, width, x0, y0, x1, y1) {
        let ctx = this.ctx;
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
    }
    drawText(color, font, text, x, y) {
        let ctx = this.ctx;
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
    }
    static createPlaceholder(width, height) {
        let imageGenerator = new ImageGenerator();
        imageGenerator.init(width, height);
        imageGenerator.drawPlaceholder();
        return imageGenerator.toString();
    }
}
exports.default = ImageGenerator;
//# sourceMappingURL=ImageGenerator.js.map