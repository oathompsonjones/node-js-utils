"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../");
String.prototype.toSentenceCase = function () {
    return this.toLowerCase().replace(this[0], this[0].toUpperCase());
};
String.prototype.toTitleCase = function () {
    return this.toLowerCase().split(" ").map((str) => str.toSentenceCase()).join(" ");
};
String.prototype.toPascalCase = function () {
    return this.toTitleCase().replace(/\s/g, "");
};
String.prototype.toCamelCase = function () {
    return this.toPascalCase().replace(this[0].toUpperCase(), this[0].toLowerCase());
};
String.prototype.toHyphenCase = function () {
    return this.toLowerCase().replace(/\s/g, "-");
};
String.prototype.toSnakeCase = function () {
    return this.toLowerCase().replace(/\s/g, "_");
};
String.prototype.toArray = function (length, seperator = "") {
    if (length < 2)
        return this.split("");
    let len = length;
    if (this.split(seperator).map((str) => str.length + 1).filter((num) => num > length).length)
        len = Math.max(...this.split(seperator).map((str) => str.length + 1));
    let message = this.toString();
    const msgArray = [];
    if (message.length > len) {
        let str = "";
        let pos;
        while (message.length > 0) {
            pos = message.length > len ? message.lastIndexOf(seperator, len) : message.length;
            if (pos > len)
                pos = len;
            str = message.substr(0, pos);
            message = message.substr(pos);
            msgArray.push(str);
        }
    }
    else
        msgArray.push(message);
    return msgArray;
};
String.prototype.removeLastIndexOf = function (str) {
    let string = this.toString();
    const index = string.lastIndexOf(str);
    if (index >= 0)
        string = string.substring(0, index) + string.substring(index + str.length);
    return string;
};
String.prototype.escapeRegExp = function () {
    return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
String.random = (length) => {
    let str = "";
    for (let i = 0; i < length; i++)
        str += Math.floor(Math.random() * 2 + 1) % 2 ? Math.floor(Math.random() * 36 + 1).toString(36).toUpperCase() : Math.floor(Math.random() * 36 + 1).toString(36);
    return str;
};
