"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../");
Date.prototype.getTimes = function () {
    const minutes = (this.getUTCMinutes() <= 9 ? `0${this.getUTCMinutes()}` : this.getUTCMinutes()).toString();
    const seconds = (this.getUTCSeconds() <= 9 ? `0${this.getUTCSeconds()}` : this.getUTCSeconds()).toString();
    const milliseconds = (this.getUTCMilliseconds() <= 9 ? `00${this.getUTCMilliseconds()}` : this.getUTCMilliseconds() <= 99 ? `0${this.getMilliseconds()}` : this.getUTCMilliseconds()).toString();
    const day = this.getUTCDay() === 0 ? "Sunday" : this.getUTCDay() === 1 ? "Monday" : this.getUTCDay() === 2 ? "Tuesday" : this.getUTCDay() === 3 ? "Wednesday" : this.getUTCDay() === 4 ? "Thursday" : this.getUTCDay() === 5 ? "Friday" : "Saturday";
    const time = { day, date: this.getUTCDate().toString(), month: (this.getUTCMonth() + 1).toString(), year: this.getUTCFullYear().toString(), hours: this.getUTCHours().toString(), minutes, seconds, milliseconds };
    return time;
};
Date.prototype.toUptimeString = function (times = ["full", "clean"]) {
    let time;
    const weeks = (this.getUTCDate() - 1) >= 7 ? Math.floor((this.getUTCDate() - 1) / 7) : 0;
    if (!times.length) {
        time = `${this.getUTCMilliseconds()}ms`;
        if (this.getUTCSeconds() > 0)
            time = `${this.getUTCSeconds()}s, ${this.getUTCMilliseconds()}ms`;
        if (this.getUTCMinutes() > 0)
            time = `${this.getUTCMinutes()}m, ${this.getUTCSeconds()}s, ${this.getUTCMilliseconds()}ms`;
        if (this.getUTCHours() > 0)
            time = `${this.getUTCHours()}h, ${this.getUTCMinutes()}m, ${this.getUTCSeconds()}s`;
        if (((this.getUTCDate() - 1) % 7) > 0)
            time = `${this.getUTCDate() - 1}d, ${this.getUTCHours()}h, ${this.getUTCMinutes()}m`;
        if (weeks > 0)
            time = `${weeks}w, ${(this.getUTCDate() - 1) % 7}d, ${this.getUTCHours()}h`;
        if (this.getUTCMonth() > 0)
            time = `${this.getUTCMonth()}mo, ${weeks}w, ${(this.getUTCDate() - 1) % 7}d, ${this.getUTCHours()}h`;
        if ((this.getUTCFullYear() - 1970) > 0)
            time = `${this.getUTCFullYear() - 1970}y, ${this.getUTCMonth()}mo, ${weeks}w, ${(this.getUTCDate() - 1) % 7}d`;
    }
    else {
        const arr = [];
        const clean = times.includes("clean");
        if (times.includes("full"))
            times = ["y", "mo", "w", "d", "h", "m", "s", "ms"];
        if (times.includes("y") && (clean ? (this.getUTCFullYear() - 1970) > 0 : true))
            arr.push(`${this.getUTCFullYear() - 1970}y`);
        if (times.includes("mo") && (clean ? this.getUTCMonth() > 0 : true))
            arr.push(`${this.getUTCMonth()}mo`);
        if (times.includes("w") && (clean ? weeks > 0 : true))
            arr.push(`${weeks}w`);
        if (times.includes("d") && (clean ? ((this.getUTCDate() - 1) % 7) > 0 : true))
            arr.push(`${(this.getUTCDate() - 1) % 7}d`);
        if (times.includes("h") && (clean ? this.getUTCHours() > 0 : true))
            arr.push(`${this.getUTCHours()}h`);
        if (times.includes("m") && (clean ? this.getUTCMinutes() > 0 : true))
            arr.push(`${this.getUTCMinutes()}m`);
        if (times.includes("s") && (clean ? this.getUTCSeconds() > 0 : true))
            arr.push(`${this.getUTCSeconds()}s`);
        if (times.includes("ms") && (clean ? this.getUTCMilliseconds() > 0 : true))
            arr.push(`${this.getUTCMilliseconds()}ms`);
        time = arr.join(", ");
    }
    return time;
};
