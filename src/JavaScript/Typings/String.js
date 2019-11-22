"use strict";
String.prototype.toProperCase = function () {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};
String.prototype.toTitleCase = function () {
    return this.toLowerCase().split(" ").map((str) => str.toProperCase()).join(" ");
};
String.prototype.toArray = function (length) {
    return [""].concat.apply([], this.split("").map((_x, i) => { return i % length ? [] : this.slice(i, i + length); }, this));
};
String.prototype.removeLastIndexOf = function (str) {
    let string = this;
    const index = string.lastIndexOf(str);
    if (index >= 0)
        string = string.substring(0, index) + string.substring(index + 1, string.length);
    return string;
};
