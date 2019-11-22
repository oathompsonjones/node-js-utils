declare module "node-js-utils" {
    /**
     * @class
     * @classdesc Creates a stopwatch.
     */
    export class Stopwatch {
        private startTime: number;
        private endTime: number;
        /**
         * Starts the stopwatch.
         */
        public start(): void;
        /**
         * Stops the stopwatch.
         */
        public stop(): void;
        /**
         * Resets the stopwatch.
         */
        public reset(): void;
        /**
         * @returns {string} a string reprentation of the time elapsed.
         */
        public toString(): string;
        /**
         * @returns {number} the total number of milliseconds elapsed.
         */
        readonly elapsedMilliseconds: number;
        /**
         * @returns {number} the total number of seconds elapsed.
         */
        readonly elapsedSeconds: number;
        /**
         * @returns {number} the total number of minutes elapsed.
         */
        readonly elapsedMinutes: number;
        /**
         * @returns {number} the total number of hours elapsed.
         */
        readonly elapsedHours: number;
        /**
         * @returns {object} an object reprentation of the time elapsed.
         */
        readonly time: {
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
    }

    /**
     * @class
     * @classdesc Generates random numbers and strings.
     */
    export class Random {
        /**
         * @returns {number} a random number between the lower and upper bounds.
         * @param {number} lowerBound the lowest inclusive value the number can be.
         * @param {number} upperBound thee highest inclusive value the number can be.
         */
        public integer(lowerBound: number, upperBound: number): number;
        /**
         * @returns {number} a random floating point number between 0 and 1.
         */
        public float(): number;
        /**
         * @returns {string} a string of set length made up of random numbers and letters (both upper and lower case).
         * @param {number} length the length of the random string.
         */
        public string(length: number): string;
    }

    // Typings
    global {
        export interface Array<T> {
            /**
             * @returns {any[]} an array of items appearing in the original array a set number of times.
             * @param {number} occurances the number of times the items must appear in the original array.
             */
            filterByCount(occurances: number): any[];
            /**
             * @returns {any[]} an array of the most common items in the original array.
             */
            getModes(): any[];
            /**
             * @returns {number} the number of times a given value appears in the array.
             * @param {any} value the value to be counted.
             */
            getCount(value: any): number;
            /**
             * @returns {any[]} an array of unique values.
             */
            removeDuplicates(): any[];
            /**
             * @returns {string} the array formatted into a comma separated list.
             * @description the last two items are separated by "and" instead of ", " and the list ends in ".".
             */
            toListString(): string;
        }

        export interface Date {
            /**
             * @returns {object} an object containing a formatted selection of values from the given date.
             * @returns {string} the day of the date as a word.
             * @returns {string} the date of the month.
             * @returns {string} the month as a number.
             * @returns {string} the year.
             * @returns {string} the hours through the day.
             * @returns {string} the minutes through the hour.
             * @returns {string} the seconds through the minute.
             * @returns {string} the milliseconds through the second.
             */
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
            /**
             * @returns {string} a formatted string representing how long it's been since the date.
             */
            toUptimeString(): string;
        }

        export interface String {
            /**
             * @returns {string} the string with the first letter set to upper case with the rest set to lower case.
             * @example "hello world" => "Hello world"
             */
            toProperCase(): string;
            /**
             * @returns {string} the string with every word set to lower case, but starting with upper case.
             * @example "hello world" => "Hello World"
             */
            toTitleCase(): string;
            /**
             * @returns {string[]} an array of the string broken down into smaller strings.
             * @param {number} length the length of each string in the array.
             */
            toArray(length: number): string[];
            /**
             * @returns {string} the string with the last index of a given string removed.
             * @param {string} str the string to be removed.
             */
            removeLastIndexOf(str: string): string;
        }
    }
}