"use strict";
Date.prototype.getTimes = function () {
    const minutes = (this.getUTCMinutes() <= 9 ? `0${this.getUTCMinutes()}` : this.getUTCMinutes()).toString();
    const seconds = (this.getUTCSeconds() <= 9 ? `0${this.getUTCSeconds()}` : this.getUTCSeconds()).toString();
    const milliseconds = (this.getUTCMilliseconds() <= 9 ? `00${this.getUTCMilliseconds()}` : this.getUTCMilliseconds() <= 99 ? `0${this.getMilliseconds()}` : this.getUTCMilliseconds()).toString();
    const day = this.getUTCDay() === 0 ? "Sunday" : this.getUTCDay() === 1 ? "Monday" : this.getUTCDay() === 2 ? "Tuesday" : this.getUTCDay() === 3 ? "Wednesday" : this.getUTCDay() === 4 ? "Thursday" : this.getUTCDay() === 5 ? "Friday" : "Saturday";
    const time = { day, date: this.getUTCDate().toString(), month: (this.getUTCMonth() + 1).toString(), year: this.getUTCFullYear().toString(), hours: this.getUTCHours().toString(), minutes, seconds, milliseconds };
    return time;
};
Date.prototype.toUptimeString = function () {
    let time = `${this.getUTCMilliseconds()}ms`;
    if (this.getUTCSeconds() > 0)
        time = `${this.getUTCSeconds()}s, ${this.getUTCMilliseconds()}ms`;
    if (this.getUTCMinutes() > 0)
        time = `${this.getUTCMinutes()}m, ${this.getUTCSeconds()}s, ${this.getUTCMilliseconds()}ms`;
    if (this.getUTCHours() > 0)
        time = `${this.getUTCHours()}h, ${this.getUTCMinutes()}m, ${this.getUTCSeconds()}s`;
    if ((this.getUTCDate() - 1) > 0)
        time = `${this.getUTCDate() - 1}d, ${this.getUTCHours()}h, ${this.getUTCMinutes()}m`;
    const weeks = (this.getUTCDate() - 1) >= 7 ? `${Math.floor((this.getUTCDate() - 1) / 7)}w` : "0w";
    if (weeks !== "0w")
        time = `${weeks}, ${(this.getUTCDate() - 1) % 7}d, ${this.getUTCHours()}h`;
    if (this.getUTCMonth() > 0)
        time = `${this.getUTCMonth()}m, ${weeks}, ${(this.getUTCDate() - 1) % 7}d, ${this.getUTCHours()}h`;
    if ((this.getUTCFullYear() - 1970) > 0)
        time = `${this.getUTCFullYear() - 1970}y, ${this.getUTCMonth()}m, ${weeks}, ${(this.getUTCDate() - 1) % 7}d`;
    return time;
};
