"use strict";
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
