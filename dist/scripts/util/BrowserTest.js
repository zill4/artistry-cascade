"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserRegex = exports.Browser = void 0;
var Browser;
(function (Browser) {
    Browser["Android"] = "Android";
    Browser["BlackBerry"] = "BlackBerry";
    Browser["iOS"] = "iOS";
    Browser["Opera"] = "Opera";
    Browser["Windows"] = "Windows";
})(Browser = exports.Browser || (exports.Browser = {}));
class BrowserRegex {
}
exports.BrowserRegex = BrowserRegex;
BrowserRegex.Android = /Android/i;
BrowserRegex.BlackBerry = /BlackBerry/i;
BrowserRegex.iOS = /iPhone|iPad|iPod/i;
BrowserRegex.Opera = /Opera Mini/i;
BrowserRegex.Windows = /IEMobile/;
class BrowserTest {
    static testRegex(regex) {
        return navigator.userAgent.match(regex);
    }
}
exports.default = BrowserTest;
BrowserTest.Android = BrowserTest.testRegex(BrowserRegex.Android);
BrowserTest.BlackBerry = BrowserTest.testRegex(BrowserRegex.BlackBerry);
BrowserTest.iOS = BrowserTest.testRegex(BrowserRegex.iOS);
BrowserTest.Opera = BrowserTest.testRegex(BrowserRegex.Opera);
BrowserTest.Windows = BrowserTest.testRegex(BrowserRegex.Windows);
//# sourceMappingURL=BrowserTest.js.map