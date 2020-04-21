"use strict";
Number.prototype.toReadableString = function () {
    return this.toString().split(".")[0].reverse().toArray(3).join(",").reverse() + (this.toString().split(".")[1] ? `.${this.toString().split(".")[1]}` : "");
};
