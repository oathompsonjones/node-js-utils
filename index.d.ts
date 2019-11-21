declare module "node-js-utils" {
    export class Stopwatch {
        private startTime: number;
        private endTime: number;
        start(): void;
        stop(): void;
        reset(): void;
        toString(): string;
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

    export class Random {
        integer(lowerBound: number, upperBound: number): number;
        float(): number;
        string(length: number): string;
    }

    // Typings
    global {
        export interface Array<T> {
            filterByCount(occurances: number): any[];
            getModes(): any[];
            getCount(value: any): number;
            removeDuplicates(): any[];
            toListString(): string;
        }

        export interface Date {
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

        export interface String {
            toProperCase(): string;
            toTitleCase(): string;
            toArray(length: number): string[];
            removeLastIndexOf(str: string): string;
        }
    }
}