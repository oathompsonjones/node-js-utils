"use strict";
String.prototype.toProperCase = function () {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};
String.prototype.toTitleCase = function () {
    return this.toLowerCase().split(" ").map((str) => str.toProperCase()).join(" ");
};
String.prototype.toArray = function (length) {
    let message = this;
    const msgArray = [];
    if (message.length > length) {
        let str = "";
        let pos;
        while (message.length > 0) {
            pos = message.length > length ? message.lastIndexOf("\n", length) : message.length;
            if (pos > length)
                pos = length;
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
        string = string.substring(0, index);
    return string;
};
