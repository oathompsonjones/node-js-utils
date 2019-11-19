/**
 * @class Creates a Stopwatch to monitor time taken.
 * @property {number} startTime the timestamp for when the Stopwatch begins.
 * @property {number} endTime the timestamp for when the Stopwatch ends.
 * @method start Beings the stopwatch.
 * @method stop Ends the stopwatch.
 * @method reset Clears the stopwatch.
 * @property {number} elapsedMilliseconds Represents the total milliseconds elapsed.
 * @property {number} elapsedSeconds Represents the total seconds elapsed.
 * @property {number} elapsedMinutes Represents the total minutes elapsed.
 * @property {number} elapsedHours Represents the total hours elapsed.
 * @property {object} time Represents the elapsed time.
 * @property {number} time.hours Represents the number of hours passed.
 * @property {number} time.minutes Represents the number of minutes passed without the number of hours.
 * @property {number} time.seconds Represents the number of seconds passed without the number of hours or minutes.
 * @property {number} time.milliseconds Represents the number of milliseconds passed without the number of seconds, hours or minutes.
 */

class Stopwatch {
    private startTime: number = 0;
    private endTime: number = 0;

    public start(): void {
        this.startTime = Date.now();
    }

    public stop(): void {
        this.endTime = Date.now();
    }

    public reset(): void {
        this.startTime = 0;
        this.endTime = 0;
    }

    get elapsedMilliseconds(): number {
        return Math.floor(this.endTime - this.startTime);
    }

    get elapsedSeconds(): number {
        return Math.floor(this.elapsedMilliseconds / 1000);
    }

    get elapsedMinutes(): number {
        return Math.floor(this.elapsedSeconds / 60);
    }

    get elapsedHours(): number {
        return Math.floor(this.elapsedMinutes / 60);
    }

    get time(): { hours: number, minutes: number, seconds: number, milliseconds: number } {
        return {
            hours: this.elapsedHours,
            minutes: this.elapsedMinutes - (this.elapsedHours * 60),
            seconds: this.elapsedSeconds - (this.elapsedMinutes * 60),
            milliseconds: this.elapsedMilliseconds - (this.elapsedSeconds * 1000)
        };
    }
}

// @ts-ignore
module.exports.Stopwatch = Stopwatch;