"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    toString() {
        return `${this.time.hours}:${this.time.minutes}:${this.time.seconds}.${this.time.milliseconds}`;
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
exports.Stopwatch = Stopwatch;
