"use strict";
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.endTime = Date.now();
    }
    reset() {
        this.startTime = 0;
        this.endTime = 0;
    }
    get elapsedMilliseconds() {
        return Math.floor(this.endTime - this.startTime);
    }
    get elapsedSeconds() {
        return Math.floor(this.elapsedMilliseconds / 1000);
    }
    get elapsedMinutes() {
        return Math.floor(this.elapsedSeconds / 60);
    }
    get elapsedHours() {
        return Math.floor(this.elapsedMinutes / 60);
    }
    get time() {
        return {
            hours: this.elapsedHours,
            minutes: this.elapsedMinutes - (this.elapsedHours * 60),
            seconds: this.elapsedSeconds - (this.elapsedMinutes * 60),
            milliseconds: this.elapsedMilliseconds - (this.elapsedSeconds * 1000)
        };
    }
}
module.exports.Stopwatch = Stopwatch;
Array.prototype.filterByCount = function (occurances) {
    const arr = [];
    this.forEach((value) => {
        if (this.getCount(value) === occurances) {
            arr.push(value);
        }
    });
    return arr;
};
Array.prototype.getModes = function () {
    if (this.length === 0)
        return [];
    const modeMap = {};
    let maxCount = 1;
    let modes = [];
    for (const element of this) {
        if (!modeMap[element.id ? element.id : element])
            modeMap[element.id ? element.id : element] = 1;
        else
            modeMap[element.id ? element.id : element]++;
        if (modeMap[element.id ? element.id : element] > maxCount) {
            modes = [element];
            maxCount = modeMap[element.id ? element.id : element];
        }
        else if (modeMap[element.id ? element.id : element] === maxCount) {
            modes.push(element);
            maxCount = modeMap[element.id ? element.id : element];
        }
    }
    return modes;
};
Array.prototype.getCount = function (value) {
    let valueCount = 0;
    this.forEach((arr) => {
        if (arr === value)
            valueCount++;
    });
    return valueCount;
};
Array.prototype.removeDuplicates = function () {
    return [...new Set(this)];
};
Array.prototype.toListString = function () {
    let string = "";
    for (let i = 0; i < this.length; i++) {
        string += this[i];
        if (i === this.length - 2) {
            string += " and ";
        }
        else if (i === this.length - 1) {
            string += ". ";
        }
        else {
            string += ", ";
        }
    }
    return string;
};
Date.prototype.getTimes = function () {
    let timeMins = this.getUTCMinutes();
    if (this.getUTCMinutes() <= 9) {
        timeMins = `0${this.getUTCMinutes()}`;
    }
    let timeSecs = this.getUTCSeconds();
    if (this.getUTCSeconds() <= 9) {
        timeSecs = `0${this.getUTCSeconds()}`;
    }
    let timeMillisecs = this.getUTCMilliseconds();
    if (this.getUTCMilliseconds() <= 9) {
        timeMillisecs = `00${this.getUTCMilliseconds()}`;
    }
    else if (this.getUTCMilliseconds() <= 99) {
        timeMillisecs = `0${this.getMilliseconds()}`;
    }
    let timeDay = this.getUTCDay();
    if (timeDay === 0) {
        timeDay = "Sunday";
    }
    else if (timeDay === 1) {
        timeDay = "Monday";
    }
    else if (timeDay === 2) {
        timeDay = "Tuesday";
    }
    else if (timeDay === 3) {
        timeDay = "Wednesday";
    }
    else if (timeDay === 4) {
        timeDay = "Thursday";
    }
    else if (timeDay === 5) {
        timeDay = "Friday";
    }
    else if (timeDay === 6) {
        timeDay = "Saturday";
    }
    const fullTime = {
        day: timeDay.toString(),
        date: this.getUTCDate().toString(),
        month: (this.getUTCMonth() + 1).toString(),
        year: this.getUTCFullYear().toString(),
        hours: this.getUTCHours().toString(),
        minutes: timeMins.toString(),
        seconds: timeSecs.toString(),
        milliseconds: timeMillisecs.toString()
    };
    return fullTime;
};
Date.prototype.toUptimeString = function () {
    let timeArray = [`${this.getUTCMilliseconds()}ms`];
    if (this.getUTCSeconds() > 0)
        timeArray = [`${this.getUTCSeconds()}s`, `${this.getUTCMilliseconds()}ms`];
    if (this.getUTCMinutes() > 0)
        timeArray = [`${this.getUTCMinutes()}m`, `${this.getUTCSeconds()}s`, `${this.getUTCMilliseconds()}ms`];
    if (this.getUTCHours() > 0)
        timeArray = [`${this.getUTCHours()}h`, `${this.getUTCMinutes()}m`, `${this.getUTCSeconds()}s`];
    if ((this.getUTCDate() - 1) > 0)
        timeArray = [`${this.getUTCDate() - 1}d`, `${this.getUTCHours()}h`, `${this.getUTCMinutes()}m`];
    const weeks = (this.getUTCDate() - 1) >= 7 ? `${Math.floor((this.getUTCDate() - 1) / 7)}w` : "0w";
    if (weeks !== "0w")
        timeArray = [weeks, `${(this.getUTCDate() - 1) % 7}d`, `${this.getUTCHours()}h`];
    if (this.getUTCMonth() > 0)
        timeArray = [`${this.getUTCMonth()}m`, weeks, `${(this.getUTCDate() - 1) % 7}d`, `${this.getUTCHours()}h`];
    if ((this.getUTCFullYear() - 1970) > 0)
        timeArray = [`${this.getUTCFullYear() - 1970}y`, `${this.getUTCMonth()}m`, weeks, `${(this.getUTCDate() - 1) % 7}d`];
    return timeArray.join(", ");
};
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
            if (pos > length) {
                pos = length;
            }
            str = message.substr(0, pos);
            message = message.substr(pos);
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
