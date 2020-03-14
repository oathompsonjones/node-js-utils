"use strict";
String.prototype.toSentenceCase = function () {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};
String.prototype.toTitleCase = function () {
    return this.toLowerCase().split(" ").map((str) => str.toSentenceCase()).join(" ");
};
String.prototype.toCamelCase = function () {
    return this.toTitleCase().replace(/ /g, "").replace(this.split("")[0].toUpperCase(), this.split("")[0].toLowerCase());
};
String.prototype.toPascalCase = function () {
    return this.toTitleCase().replace(/ /g, "");
};
String.prototype.toHyphenCase = function () {
    return this.toLowerCase().replace(/ /g, "-");
};
String.prototype.toSnakeCase = function () {
    return this.toLowerCase().replace(/ /g, "_");
};
String.prototype.toArray = function (length, seperator = "") {
    let len = length;
    if (this.split(seperator).map((str) => str.length + 1).filter((num) => num > length).length)
        len = Math.max(...this.split(seperator).map((str) => str.length + 1));
    let message = this;
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
    let string = this;
    const index = string.lastIndexOf(str);
    if (index >= 0)
        string = string.substring(0, index) + string.substring(index + str.length);
    return string;
};
