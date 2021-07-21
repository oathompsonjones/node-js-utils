declare module "simple-node-utils" {
    global {
        export interface Array<T> {
            /**
             * @description Creates a new array only containing the elements which appear the given number of times.
             * @param {number} occurrences The number of times each element must appear in the original array.
             * @return {*} {Array<T>} A new array only containing the elements which appear the given number of times.
             * @memberof Array
             */
            filterByCount(occurrences: number): Array<T>;
            /**
             * @description Finds the most common element in the array, if there is more than one, it returns them all.
             * @return {*} {Array<T>} An array containing the most common items in the original array.
             * @memberof Array
             */
            getModes(): Array<T>;
            /**
             * @description Counts how many times the given values appears in the array.
             * @param {*} value The value to count.
             * @return {*} {number} THe number of times the given value appears in the array.
             * @memberof Array
             */
            getCount(value: any): number;
            /**
             * @description Creates a new array, with no duplicate values.
             * @return {*} {Array<T>} A new array, with no duplicate values.
             * @memberof Array
             */
            removeDuplicates(): Array<T>;
            /**
             * @description Joins each element with a comma, but puts " and " between the last two elements.
             * @return {*} {string} A string with each element joined by a comma, but with " and " between teh last two elements.
             * @memberof Array
             */
            toListString(): string;
            /**
             * @description Creates a new array, containing sub-arrays from the original array.
             * @param {number} maxLength The length of each sub-array.
             * @return {*} {Array<T>[]} A new array, containing sub-arrays form the original array, each of the given length.
             * @memberof Array
             */
            split(maxLength: number): Array<T>[];
            /**
             * @description Create a new array, but removes an occurrence of the given value.
             * @param {*} value The value to remove.
             * @return {*} {Array<T>} A new array, with no occurrences of the given value.
             * @memberof Array
             */
            remove(value: any): Array<T>;
            /**
             * @description Creates a new array from the original, but shuffles it.
             * @return {*} {Array<T>} A new, shuffled array.
             * @memberof Array
             */
            shuffle(): Array<T>;
        }

        export interface Date {
            /**
             * @description Creates an object which shows each property of the Date and Time.
             * @return {*} {{
             *                 day: string;
             *                 date: string;
             *                 month: string;
             *                 year: string;
             *                 hours: string;
             *                 minutes: string;
             *                 seconds: string;
             *                 milliseconds: string;
             *             }} An object expressing each property of the Date and Time.
             * @memberof Date
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
             * @description Returns a string representing the amount of time that has passed since that date.
             * @param {(("y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms" | "full" | "clean")[])} [times] The times you want displayed. "full" shows them all, "clean" ignores any times that are equal to 0. An empty array will choose based on the amount of time passed.
             * @return {*} {string} A string representation of the time passed.
             * @memberof Date
             */
            toUptimeString(times?: ("y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms" | "full" | "clean")[]): string;
        }

        export interface String {
            /**
             * @description Converts the string to sentence case.
             * @example sentence case => Sentence case
             * @return {*} {string} The string, in sentence case.
             * @memberof String
             */
            toSentenceCase(): string;
            /**
             * @description Converts the string to title case.
             * @example title case => Title Case
             * @return {*} {string} The string, in title case.
             * @memberof String
             */
            toTitleCase(): string;
            /**
             * @description Converts the string to camelCase.
             * @example camel case => camelCase
             * @return {*} {string} The string, in camel case.
             * @memberof String
             */
            toCamelCase(): string;
            /**
             * @description Converts the string to PascalCase.
             * @example pascal case => PascalCase
             * @return {*} {string} The string, in pascal case.
             * @memberof String
             */
            toPascalCase(): string;
            /**
             * @description Converts the string to hyphen-case.
             * @example hyphen case => hyphen-case
             * @return {*} {string} The string, in hyphen case.
             * @memberof String
             */
            toHyphenCase(): string;
            /**
             * @description Converts the string to snake_case.
             * @example snake case => snake_case
             * @return {*} {string} The string, in snake case.
             * @memberof String
             */
            toSnakeCase(): string;
            /**
             * @description Removes the last occurrence of the given substring.
             * @param {string} str The substring to be removed.
             * @return {*} {string} The string, with the last occurrence of the substring removed.
             * @memberof String
             */
            removeLastIndexOf(str: string): string;
            /**
             * @description Escapes any special regular expression characters.
             * @return {*} {string} The escaped string.
             * @memberof String
             */
            escapeRegExp(): string;
            /**
             * @description Reverses the string.
             * @return {*} {string} The reversed string.
             * @memberof String
             */
            reverse(): string;
        }

        export interface StringConstructor {
            /**
             * @description Returns a random string of the given length.
             * @param {number} length The length of the string.
             * @return {*} {string} Returns a random string of the given length.
             * @memberof StringConstructor
             */
            random(length: number): string;
        }

        export interface Math {
            /**
             * @description Returns a random integer between a and b, inclusive.
             * @param {number} a The minimum possible value.
             * @param {number} b The maximum possible value.
             * @return {*} {number} Returns a random integer between a and b, inclusive.
             * @memberof Math
             */
            randomInt(a: number, b: number): number;
            /**
             * @description Returns a random integer between 0 and b, inclusive.
             * @param {number} b The maximum possible value.
             * @return {*} {number} Returns a random integer between 0 and b, inclusive.
             * @memberof Math
             */
            randomInt(b: number): number;
            /**
             * @description A Math.max method for the BigInt type.
             * @param {...bigint[]} args Numeric expressions to be evaluated.
             * @return {*} {bigint} Returns the larger of a set of supplied numeric expressions.
             * @memberof Math
             */
            bigIntMax(...args: bigint[]): bigint;
            /**
             * @description A Math.min method for the BigInt type.
             * @param {...bigint[]} args Numeric expressions to be evaluated.
             * @return {*} {bigint} Returns the smaller of a set of supplied numeric expressions.
             * @memberof Math
             */
            bigIntMin(...args: bigint[]): bigint;
            /**
             * @description Takes an input, a range for that input, and a range for the output. The output sits in the output range, proportionally to how the input sat in the input range.
             * @param {number} x The input number.
             * @param {number} inMin The minimum possible value for the input.
             * @param {number} inMax The maximum possible value for the input.
             * @param {number} outMin The minimum possible value for the output.
             * @param {number} outMax The maximum possible value for the output.
             * @return {*} {number} A number adjusted for the new range.
             * @memberof Math
             */
            map(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
        }

        export interface Number {
            /**
             * @description Converts a number to a string, and formats it so that it is easier to read.
             * @example 9999999 => 9 999 999
             * @example 1234567890.0987654 => 1 234 567 890.0987654
             * @return {*} {string} A readable string.
             * @memberof Number
             */
            toReadableString(): string;
        }

        export interface ObjectConstructor {
            /**
             * @description Checks if two objects are equal in value.
             * @param {object} obj1 The first object.
             * @param {object} obj2 The second object.
             * @return {*} {boolean} Whether or not the two objects are equal.
             * @memberof ObjectConstructor
             */
            isEqual(obj1: object, obj2: object): boolean;
        }
    }
    /**
     * @description Takes in an string representing an amount of time and returns the equivalent number of milliseconds.
     * @export
     * @param {string} str The string representation of an amount of time, e.g. "5m" = 5 minutes, "1h,5m" = 1 hour and 5 minutes.
     * @return {*} {number} The number of milliseconds equivalent to the input string.
     * @return {*} {null} If the string is invalid, the response in null.
     */
    export function parseTime(str: string): number | null;
}