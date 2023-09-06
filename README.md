# simple-node-utils

## Date

### Types
```ts
enum DayOfTheWeek {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 0
}
```

```ts
enum MonthOfTheYear {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11
}
```

```ts
interface IDateTime {
    day: keyof typeof DayOfTheWeek;
    date: number;
    month: keyof typeof MonthOfTheYear;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
```

### Functions
```ts
/**
 * Creates an object which shows each property of the Date and Time.
 *
 * @param {Date} date The date.
 * @returns An object expressing each property of the Date and Time.
 */
function getTimes(date: Date): IDateTime;
```

```ts
/**
 * Takes a date and calculates how much time has passed since.
 *
 * @param {(Date | EpochTimeStamp)} date The date as either a Date object or an EpochTimeStamp.
 * @param {Array<"clean" | "d" | "full" | "h" | "m" | "mo" | "ms" | "s" | "w" | "y">} [formatOptions=[]] The format.
 * @returns {string} A string representing how much time has passed.
 */
function timeSince(
    date: Date | EpochTimeStamp,
    formatOptions: Array<"clean" | "d" | "full" | "h" | "m" | "mo" | "ms" | "s" | "w" | "y"> = []
): string;
```

## Iterable

### Functions
```ts
/**
 * A contains function for any interable type.
 * Checks if a given iterable contains a given value.
 * For Maps, it checks if the key exists.
 *
 * @template Type The type of value in the iterable.
 * @param {Iterable<Type>} iterable The iterable to check the value for.
 * @param {Type} value The value to check for.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {boolean} Whether or not the iterable contains the value.
 */
function contains<Type>(
    iterable: Iterable<Type>, value: Type,
    areEqual: EqualityFunction<Type> = isEqual
): boolean;
```

```ts
/**
 * Creates a new iterable which doesn't contain any duplicate values.
 *
 * @template Type The type of the values in the iterable.
 * @param {Iterable<Type>} iterable The iterable to remove duplicates from.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Array<Type>} An array containing the values of the original iterable, but without any duplicates.
 */
function removeDuplicates<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Gets the union of two iterables. A ∪ B
 *
 * @template TypeA The type of value in the first iterable.
 * @template TypeB The type of value in the second iterable.
 * @param {Iterable<TypeA>} A The first iterable.
 * @param {Iterable<TypeB>} B The second iterable.
 * @param {EqualityFunction<TypeA | TypeB>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Array<TypeB | TypeA>} The union of the two iterables.
 */
function union<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual
): Array<TypeA | TypeB>;
```

```ts
/**
 * Gets the intersection of two iterables. A ∩ B
 *
 * @template TypeA The type of value in the first iterable.
 * @template TypeB The type of value in the second iterable.
 * @param {Iterable<TypeA>} A The first iterable.
 * @param {Iterable<TypeB>} B The second iterable.
 * @param {EqualityFunction<TypeA | TypeB>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Array<TypeA | TypeB>} The intersection of the two iterables.
 */
function intersection<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual
): Array<TypeA | TypeB>;
```

```ts
/**
 * Gets the difference of two iterables. A \ B
 *
 * @template TypeA The type of value in the first iterable.
 * @template TypeB The type of value in the second iterable.
 * @param {Iterable<TypeA>} A The first iterable.
 * @param {Iterable<TypeB>} B The second iterable.
 * @param {EqualityFunction<TypeA | TypeB>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Array<TypeA | TypeB>} The difference of the two iterables.
 */
function difference<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual
): Array<TypeA | TypeB>;
```

```ts
/**
 * Equivalent to using `Array#join(", ")`, but the last command is replaced by `"and"`, and `"."` is added to the end.
 *
 * @template Type The type of value in the iterable.
 * @param {Iterable<Type>} iterable The iterable to create a list from.
 * @param {(value: Type) => string} [toString=(value: Type): string => String(value)] A function to turn the value into a string.
 * Defaults to `String(value)`.
 * @returns {string} The list.
 */
function toListString<Type>(
    iterable: Iterable<Type>,
    toString: (value: Type) => string = (value: Type): string => String(value)
): string;
```

```ts
/**
 * Counts how many times a given value appears in the given iterable.
 *
 * @template Type The type of value in the iterable.
 * @param {Iterable<Type>} iterable The iterable.
 * @param {Type} value The value to count.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {number} The number of times the element appears in the iterable.
 */
function countElement<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number;
```

```ts
/**
 * Creates a new array which contains only the values which appear the given number of times.
 *
 * @template Type The type of the iterable.
 * @param {Iterable<Type>} iterable The iterable to filter.
 * @param {number} occurrences The number of times an element needs to appear.
 * @param {boolean} [includeExcessOccurances=false] Whether or not to include items which appear more than the given number of times.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Type[]} An array contianing only the elements which apppear enough times in the original array.
 */
function filterByCount<Type>(
    iterable: Iterable<Type>,
    occurrences: number,
    includeExcessOccurances: boolean = false,
    areEqual: EqualityFunction<Type> = isEqual
): Iterable<Type>;
```

```ts
/**
 * Finds the most common element(s) in the iterable.
 *
 * @template Type The type of the values in the iterable.
 * @param {Iterable<Type>} iterable The iterable to filter.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Type[]} An array of the most common element(s) in the iterable.
 */
function getModes<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Creates a new array, containing the original array, split into smaller arrays.
 *
 * @template Type The type of the array.
 * @param {Type[]} iterable The array to split.
 * @param {number} maxLength The maximum length of each subarray.
 * @returns {Type[][]} The new array.
 */
function splitIterable<Type>(iterable: Iterable<Type>, maxLength: number): Type[][];
```

```ts
/**
 * Create a new array, removing any occurances of the given value.
 *
 * @template Type The type of the iterable.
 * @param {Iterable<Type>} iterable The array to remove the value from.
 * @param {Type} value The value to remove.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {Type[]} The new array.
 */
function removeValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Creates a new array, containing the elements of the original array, in a random order.
 *
 * @template Type The type of the iterable.
 * @param {Iterable<Type>} iterable The iterable to shuffle
 * @returns {Type[]} The new array.
 */
function shuffle<Type>(iterable: Iterable<Type>): Type[];
```

```ts
/**
 * Just like `Array#indexOf(value)`, but this checks if any two values are equal rather than just their reference.
 *
 * @template Type
 * @param {Iterable<Type>} iterable The iterable to find the value in.
 * @param {Type} value The value to find the index of.
 * @param {EqualityFunction<Type>} [areEqual=isEqual] A function to determine if two values are equal.
 * Defaults to the equality function provided by this package.
 * @returns {number} The index of the value if it was found, -1 otherwise.
 */
function indexOfValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number;
```

## Math

### Functions

```ts
/**
 * Takes an input, a range for that input, and a range for the output.
 * The output sits in the output range, proportionally to how the input sat in the input range.
 *
 * @param {number} x The input number.
 * @param {number} inMin The minimum possible value for the input.
 * @param {number} inMax The maximum possible value for the input.
 * @param {number} outMin The minimum possible value for the output.
 * @param {number} outMax The maximum possible value for the output.
 * @returns {number} A number adjusted for the new range.
 */
function mapRange(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

```ts
/**
 * Returns a random integer in the range [0, b).
 *
 * @param {number} maxValue The maximum possible value.
 * @return {number} Returns a random integer between 0 and b.
 */
function randomInt(maxValue: number): number;

/**
 * Returns a random integer in the range [a, b).
 *
 * @param {number} minValue The minimum possible value.
 * @param {number} maxValue The maximum possible value.
 * @return {number} Returns a random integer between a and b.
 */
function randomInt(minValue: number, maxValue: number): number;
```

```ts
/**
 * A Math.max method for the BigInt type.
 *
 * @param {...bigint[]} args Numeric expressions to be evaluated.
 * @returns {bigint} Returns the larger of a set of supplied numeric expressions.
 */
function bigIntMax(...args: bigint[]): bigint;
```

```ts
/**
 * A Math.min method for the BigInt type.
 *
 * @param {...bigint[]} args Numeric expressions to be evaluated.
 * @returns {bigint} Returns the smaller of a set of supplied numeric expressions.
 */
function bigIntMin(...args: bigint[]): bigint;
```

## Number

### Functions

```ts
/**
 * Converts a number to a string, and formats it so that it is easier to read.
 *
 * @example 9999999 => 9 999 999
 * @example 1234567890.0987654 => 1 234 567 890.0987654
 * @param {number} num The number to format.
 * @returns {string} A readable string.
 */
export function toReadableString(num: number): string;
```

## Object

### Functions

```ts
/**
 * Checks if two values are equal.
 *
 * For values of type `"function"`, this is always `false`.
 *
 * For values of type `"undefined"`, `"boolean"`, `"number"`, `"bigint"`, or
 * `"string"`, this is a simple strict equality (`===`) check.
 *
 * If both values are `null`, this is `true`. If only one value is `null`, this is
 * `false`.
 *
 * For values of type `"symbol"`, this converts the symbols to strings, and
 * does a simple strict equality (`===`) check.
 *
 * For all other values, the keys are checked using the same system, and if
 * they're equal, each value is recursively checked too.
 *
 * @template Type The type for the values to compare.
 * @param {Type} a The first value.
 * @param {Type} b The second value.
 * @returns {boolean} Whether or not the two objects are equal.
 */
export function isEqual<Type>(a: Type, b: Type): boolean;
```

## String

### Functions

```ts
/**
 * Converts the string to kebab case.
 *
 * @example kebab case => kebab-case
 * @param {string} str The string to convert.
 * @returns {string} The string in kebab case.
 */
function toSentenceCase(str: string): string;
```

```ts
/**
 * Converts the string to title case.
 *
 * @example title case => Title Case
 * @param {string} str The string to convert.
 * @returns {string} The string in title case.
 */
function toTitleCase(str: string): string;
```

```ts
/**
 * Converts the string to pascal case.
 *
 * @example pascal case => PascalCase
 * @param {string} str The string to convert.
 * @returns {string} The string in pascal case.
 */
function toPascalCase(str: string): string;
```

```ts
/**
 * Converts the string to camel case.
 *
 * @example camel case => camelCase
 * @param {string} str The string to convert.
 * @returns {string} The string in camel case.
 */
function toCamelCase(str: string): string;
```

```ts
/**
 * Converts the string to kebab case.
 *
 * @example kebab case => kebab-case
 * @param {string} str The string to convert.
 * @returns {string} The string in kebab case.
 */
function toKebabCase(str: string): string;
```

```ts
/**
 * Converts the string to snake case.
 *
 * @example snake case => snake_case
 * @param {string} str The string to convert.
 * @returns {string} The string in snake case.
 */
function toSnakeCase(str: string): string;
```

```ts
/**
 * Converts the string to screaming kebab case.
 *
 * @example screaming kebab case => SCREAMING-KEBAB-CASE
 * @param {string} str The string to convert.
 * @returns {string} The string in screaming kebab case.
 */
function toScreamingKebabCase(str: string): string;
```

```ts
/**
 * Converts the string to screaming snake case.
 *
 * @example screaming snake case => SCREAMING_SNAKE_CASE
 * @param {string} str The string to convert.
 * @returns {string} The string in screaming snake case.
 */
function toScreamingSnakeCase(str: string): string;
```

```ts
/**
 * Replaces the last instance of the given substring with a new substring.
 *
 * @param {string} str The string to modify.
 * @param {string} substr The substring to replace the last instance of.
 * @param {string} replacement The substring replacement.
 * @returns {string} The new string.
 */
function replaceLastIndexOf(str: string, substr: string, replacement: string): string;
```

```ts
/**
 * Removes the last instance of the given substring from the given string.
 *
 * @param {string} str The string to modify.
 * @param {string} substr The substring to remove the last instance of.
 * @returns {string} The new string.
 */
function removeLastIndexOf(str: string, substr: string): string;
```

```ts
/**
 * Escapes any special regular expression characters.
 *
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
function escapeRegExp(str: string): string;
```

```ts
/**
 * Reverses the string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str: string): string;
```

```ts
/**
 * Returns a random string of the given length.
 *
 * @param {number} length The length of the string.
 * @returns {string} The random string.
 */
function randomString(length: number): string;
```

## Other

### Types

```ts
/**
 * A fixed length array type.
 *
 * @typedef {FixedLengthArray}
 * @template Length The length of the array.
 * @template Type The type of the values stored in the array.
 */
export type FixedLengthArray<
    Length extends number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Type = any
> = Omit<FixedLengthArrayItems<Length, Type>, ArrayLengthMutationKeys>;

/**
 * The keys of an array which can alter its length.
 *
 * @typedef {ArrayLengthMutationKeys}
 */
type ArrayLengthMutationKeys = number | "pop" | "push" | "shift" | "splice" | "unshift";

/**
 * Recursively generates a tuple of the given length with the given type.
 *
 * @typedef {FixedLengthArrayItems}
 * @template Length The length of the tuple.
 * @template Type The type of each value in the tuple.
 * @template Accumulator The starting value of the tuple for the recursion.
 */
type FixedLengthArrayItems<
    Length extends number,
    Type,
    Accumulator extends Type[] = []
> = Accumulator["length"] extends Length
    ? Accumulator & { readonly length: Length; }
    : Accumulator["length"] extends 999
        ? Type[] & { readonly length: Length; }
        : FixedLengthArrayItems<Length, Type, [...Accumulator, Type]>;
```

```ts
/**
 * A range of numbers from Start to End. [Start, End)
 *
 * @typedef {IntRange}
 * @template Start The lowest number.
 * @template End The highest number plus one.
 */
export type IntRange<Start extends number, End extends number> = Exclude<Enumerate<End>, Enumerate<Start>>;

/**
 * A helper type for Enumerate.
 *
 * @typedef {Enumerate}
 * @template N The highest number plus one.
 * @template Acc An accumlator to generate the range.
 */
type EnumerateHelper<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : EnumerateHelper<N, [...Acc, Acc["length"]]>;

/**
 * A range of numbers from 0 to N. [0, N)
 *
 * @typedef {Enumerate}
 * @template N The highest number plus one.
 */
export type Enumerate<N extends number> = EnumerateHelper<N>;
```

```ts
/**
 * A function to determine if 2 values are equal.
 *
 * @typedef {EqualityFunction}
 * @template Type The type of the two values.
 */
export type EqualityFunction<Type> = (a: Type, b: Type) => boolean;
```

### Functions

```ts
/**
 * Takes in an string representing an amount of time and returns the equivalent number of milliseconds.
 *
 * @example `"5m"` => 5 minutes => `300000`
 * @example `"1h,5m"` => 1 hour and 5 minutes => `3900000`
 * @param {string} str The string representation of an amount of time.
 * @returns {(number | null)} The number of milliseconds, or null if the input is invalid.
 */
function parseTime(str: string): number | null;
```

```ts
/**
 * A memoisation function to wrap around other functions.
 *
 * @template ArgsType The argument types of the function to be wrapped.
 * @template ReturnType The return type of the function to be wrapped.
 * @param {(...args: ArgsType[]) => ReturnType} func The function to be wrapped.
 * @param {Record<string, unknown>} [cache={}] The cache object, this should be ommitted in most cases.
 * @returns {(...args: ArgsType[]) => ReturnType} The same output as the wrapped function.
 */
function memoise<ArgsType, ReturnType>(
    func: (...args: ArgsType[]) => ReturnType, cache: Record<string, unknown> = {}
): (...args: ArgsType[]) => ReturnType;
```