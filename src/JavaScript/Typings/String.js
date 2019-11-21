"use strict";
String.prototype.toProperCase = function () {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};
String.prototype.toTitleCase = function () {
    return this.toLowerCase().split(" ").map((str) => str.toProperCase()).join(" ");
};
String.prototype.toArray = function (length) {
    let string = this;
    const arr = [];
    if (string.length > length) {
        let pos;
        let str = "";
        while (string.length > 0) {
            // split on last newline
            pos = string.length > length ? string.lastIndexOf("\n", length) : string.length;
            // if there's no newlines
            if (pos > length)
                pos = length;
            // grab the substring, and remove from string
            str = string.substr(0, pos);
            string = string.substr(pos);
            // push to array
            arr.push(str);
        }
    }
    else
        arr.push(string);
    return arr;
};
String.prototype.removeLastIndexOf = function (str) {
    let string = this;
    const index = string.lastIndexOf(str);
    if (index >= 0 && index + str.length >= string.length)
        string = string.substring(0, index);
    return string;
};
