export class Stopwatch {
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

    public toString(): string {
        return `${this.time.hours}:${this.time.minutes}:${this.time.seconds}.${this.time.milliseconds}`;
    }

    get elapsedMilliseconds(): number {
        return Math.floor((this.endTime || Date.now()) - (this.startTime || Date.now()));
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