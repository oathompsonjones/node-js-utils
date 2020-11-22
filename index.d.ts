declare module "simple-node-utils" {
    global {
        export interface Array<T> {
            /**
             * @returns {Array<T>} an array of items appearing in the original array a set number of times.
             * @param {number} occurances the number of times the items must appear in the original array.
             */
            filterByCount(occurances: number): Array<T>;
            /**
             * @returns {Array<T>} an array of the most common items in the original array.
             */
            getModes(): Array<T>;
            /**
             * @returns {number} the number of times a given value appears in the array.
             * @param {any} value the value to be counted.
             */
            getCount(value: any): number;
            /**
             * @returns {Array<T>} an array of unique values.
             */
            removeDuplicates(): Array<T>;
            /**
             * @returns {string} the array formatted into a comma separated list.
             * @description the last two items are separated by "and" instead of ", " and the list ends in ".".
             */
            toListString(): string;
            /**
             * @returns {Array<T>[]} an array of smaller arrays.
             * @param {number} maxLength the maximum length of the smaller arrays.
             */
            split(maxLength: number): Array<T>[];
            /**
             * @returns {Array<T>} a new array, without the value.
             * @param value the value to remove (not an object).
             */
            remove(value: any): Array<T>;
            /**
             * @returns {Array<T>} the same array, in a random order.
             */
            shuffle(): Array<T>;
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
             * @param {string[]} times an optional array containing the times to be returned. ["full"] returns all times. ["clean"] won't return times equal to 0.
             */
            toUptimeString(times?: ("y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms" | "full" | "clean")[]): string;
        }

        export interface String {
            /**
             * @returns {string} the string Sentence case.
             * @example "hello world" => "Hello world"
             */
            toSentenceCase(): string;
            /**
             * @returns {string} the string in Title Case.
             * @example "hello world" => "Hello World"
             */
            toTitleCase(): string;
            /**
             * @returns {string} the string in camelCase.
             * @example "hello world" => "helloWorld"
             */
            toCamelCase(): string;
            /**
             * @returns {string} the string in PascalCase.
             * @example "hello world" => "HelloWorld"
             */
            toPascalCase(): string;
            /**
             * @returns {string} the string in hyphen-case.
             * @example "hello world" => "hello-world"
             */
            toHyphenCase(): string;
            /**
             * @returns {string} the string in snake_case.
             * @example "hello world" => "hello_world"
             */
            toSnakeCase(): string;
            /**
             * @returns {string[]} an array of strings, no longer than length, and split at the closest new line.
             * @param {number} length the length of each string in the array.
             * @deprecated if the length you input is too small based on your seperator, it will be replaced with the minimum length that works.
             * @param {string?} seperator an optional seperator.
             */
            toArray(length: number, seperator?: string): string[];
            /**
             * @returns {string} the string with the last index of a given string removed.
             * @param {string} str the string to be removed.
             */
            removeLastIndexOf(str: string): string;
            /**
             * @returns {string} the same sting, but with all RegExp characters escaped.
             */
            escapeRegExp(): string;
            /**
             * @returns {string} the string reversed.
             */
            reverse(): string;
        }

        export interface StringConstructor {
            /**
             * @returns {string} A random string of given length.
             * @param length The length of the random string.
             */
            random(length: number): string;
        }

        export interface Math {
            /**
             * @returns {number} A random number between a and b.
             * @param a The smallest value.
             * @param b The biggest value.
             */
            randomInt(a: number, b: number): number;
            /**
             * @returns {number} A random number between a and b.
             * @param b The biggest value.
             */
            randomInt(b: number): number;
        }

        export interface Number {
            /**
             * @returns {number} a string representation of the number with space separation.
             * @example 9999999 => 9 999 999
             * @example 1234567890.0987654 => 1 234 567 890.0987654
             */
            toReadableString(): string;
        }
    }
}