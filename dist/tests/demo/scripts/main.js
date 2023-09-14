"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const FontAwesome = require("@fortawesome/free-solid-svg-icons");
const icons_1 = require("@artistry/icons");
const Application_1 = require("./Application");
window.onload = function () {
    icons_1.default.registerFontAwesome(FontAwesome.fas);
    document.body.appendChild(icons_1.default.createIconRoot());
    Application_1.default.run();
};
//# sourceMappingURL=main.js.map