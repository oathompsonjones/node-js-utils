declare class Stopwatch {
    private startTime;
    private endTime;
    start(): void;
    stop(): void;
    reset(): void;
    readonly elapsedMilliseconds: number;
    readonly elapsedSeconds: number;
    readonly elapsedMinutes: number;
    readonly elapsedHours: number;
    readonly time: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    };
}
interface Array<T> {
    filterByCount(occurances: number): any[];
    getModes(): any[];
    getCount(value: any): number;
    removeDuplicates(): any[];
    toListString(): string;
}
interface Date {
    getTimes(): {
        day: string;
        date: string;
        month: string;
        year: string;
        hours: string;
        minutes: string;
        seconds: string;
        milliseconds: string;
    };
    toUptimeString(): string;
}
interface String {
    toProperCase(): string;
    toTitleCase(): string;
    toArray(length: number): string[];
    removeLastIndexOf(str: string): string;
}
