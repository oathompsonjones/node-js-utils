"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../");
Number.prototype.toReadableString = function () {
    return `${this.toString().split(".")[0].split("").reverse().map((x, i) => (i + 1) % 3 === 0 ? ` ${x}` : x).reverse().join("")}${this.toString().split(".")[1] ? `.${this.toString().split(".")[1]}` : ""}`;
};
