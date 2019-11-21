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
            // split on last newline
            pos = message.length > length ? message.lastIndexOf("\n", length) : message.length;
            // if there's no newlines
            if (pos > length) {
                pos = length;
            }
            // grab the substring, and remove from message
            str = message.substr(0, pos);
            message = message.substr(pos);
            // push to array
            msgArray.push(str);
        }
    }
    else {
        msgArray.push(message);
    }
    return msgArray;
};
String.prototype.removeLastIndexOf = function (str) {
    let string = this;
    const index = string.lastIndexOf(str);
    if (index >= 0 && index + str.length >= string.length) {
        string = string.substring(0, index);
    }
    return string;
};
