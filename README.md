# simple-node-utils

## Date

### Types
```ts
enum Days {
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
enum Months {
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
type DateTime = {
    day: keyof typeof Days;
    date: number;
    month: keyof typeof Months;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
```

### Functions
```ts
/**
 * Creates an object which shows each property of the Date and Time.
 * @param date - The date object.
 * @returns An object expressing each property of the Date and Time.
 */
function getTimes(date: Date): DateTime;
```

```ts
/**
 * Takes a date and calculates how much time has passed since.
 * @param date - The date as either a Date object or an EpochTimeStamp.
 * @param formatOptions - Which time units to include in the output.
 * @returns A string representing how much time has passed.
 */
function timeSince(
    date: Date | EpochTimeStamp,
    formatOptions: Array<"clean" | "d" | "full" | "h" | "m" | "mo" | "ms" | "s" | "w" | "y"> = [],
): string;
```

## Iterable

### Functions
```ts
/**
 * A contains function for any interable type.
 * Checks if a given iterable contains a given value.
 * For Maps, it checks if the key exists.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to check the value for.
 * @param value - The value to check for.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns Whether or not the iterable contains the value.
 */
function contains<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): boolean;
```

```ts
/**
 * Creates a new iterable which doesn't contain any duplicate values.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to remove duplicates from.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array containing the values of the original iterable, but without any duplicates.
 */
function removeDuplicates<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Gets the union of two iterables. A ∪ B.
 * @template TypeA - The type of the elements in the first iterable.
 * @template TypeB - The type of the elements in the second iterable.
 * @param A - The first iterable.
 * @param B - The second iterable.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The union of the two iterables.
 */
function union<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB>;
```

```ts
/**
 * Gets the intersection of two iterables. A ∩ B.
 * @template TypeA - The type of the elements in the first iterable.
 * @template TypeB - The type of the elements in the second iterable.
 * @param A - The first iterable.
 * @param B - The second iterable.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The intersection of the two iterables.
 */
function intersection<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB>;
```

```ts
/**
 * Gets the difference of two iterables. A \\ B.
 * @template TypeA - The type of the elements in the first iterable.
 * @template TypeB - The type of the elements in the second iterable.
 * @param A - The first iterable.
 * @param B - The second iterable.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The difference of the two iterables.
 */
function difference<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB>;
```

```ts
/**
 * Equivalent to using `Array#join(", ")`, but the last command is replaced by `"and"`, and `"."` is added to the end.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to create a list from.
 * @param toString - A function to turn the value into a string. Defaults to `String(value)`.
 * @returns The list as a string.
 */
function toListString<Type>(
    iterable: Iterable<Type>,
    toString: (value: Type) => string = (value: Type): string => String(value),
): string;
```

```ts
/**
 * Counts how many times a given value appears in the given iterable.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to count the value in.
 * @param value - The value to count.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The number of times the element appears in the iterable.
 */
function countElement<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number;
```

```ts
/**
 * Creates a new array which contains only the values which appear the given number of times.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to filter.
 * @param occurrences - The number of times an element needs to appear.
 * @param includeExcessOccurances - Whether or not to include items which appear more than the given number of times.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array contianing only the elements which apppear enough times in the original array.
 */
function filterByCount<Type>(
    iterable: Iterable<Type>,
    occurrences: number,
    includeExcessOccurances: boolean = false,
    areEqual: EqualityFunction<Type> = isEqual,
): Iterable<Type>;
```

```ts
/**
 * Finds the most common element(s) in the iterable.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to filter.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array of the most common element(s) in the iterable.
 */
function getModes<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Creates a new array, containing the original array, split into smaller arrays.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The array to split.
 * @param maxLength - The maximum length of each subarray.
 * @returns The new array.
 */
function splitIterable<Type>(iterable: Iterable<Type>, maxLength: number): Type[][];
```

```ts
/**
 * Create a new array, removing any occurances of the given value.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The array to remove the value from.
 * @param value - The value to remove.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The new array.
 */
function removeValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): Type[];
```

```ts
/**
 * Creates a new array, containing the elements of the original array, in a random order.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to shuffle.
 * @returns The new array.
 */
function shuffle<Type>(iterable: Iterable<Type>): Type[];
```

```ts
/**
 * Just like `Array#indexOf(value)`, but this checks if any two values are equal rather than just their reference.
 * @template Type - The type of the elements in the iterable.
 * @param iterable - The iterable to find the value in.
 * @param value - The value to find the index of.
 * @param areEqual - A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The index of the value if it was found, -1 otherwise.
 */
function indexOfValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number;
```

## Math

### Functions

```ts
/**
 * Takes an input, a range for that input, and a range for the output.
 * The output sits in the output range, proportionally to how the input sat in the input range.
 * @param x - The input number.
 * @param inMin - The minimum possible value for the input.
 * @param inMax - The maximum possible value for the input.
 * @param outMin - The minimum possible value for the output.
 * @param outMax - The maximum possible value for the output.
 * @returns A number adjusted for the new range.
 */
function mapRange(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
```

```ts
/**
 * Returns a random integer in the range [0, b).
 * @param maxValue - The maximum possible value.
 * @returns Returns a random integer between 0 and b.
 */
function randomInt(maxValue: number): number;

/**
 * Returns a random integer in the range [a, b).
 * @param minValue - The minimum possible value.
 * @param maxValue - The maximum possible value.
 * @returns Returns a random integer between a and b.
 */
function randomInt(minValue: number, maxValue: number): number;
```

```ts
/**
 * A Math.max method for the BigInt type.
 * @param args - Numeric expressions to be evaluated.
 * @returns Returns the larger of a set of supplied numeric expressions.
 */
function bigIntMax(...args: bigint[]): bigint;
```

```ts
/**
 * A Math.min method for the BigInt type.
 * @param args - Numeric expressions to be evaluated.
 * @returns Returns the smaller of a set of supplied numeric expressions.
 */
function bigIntMin(...args: bigint[]): bigint;
```

## Number

### Functions

```ts
/**
 * Converts a number to a string, and formats it so that it is easier to read.
 * @param num - The number to format.
 * @returns A readable string.
 * @example
 * ```ts
 * toReadableString(9999999); // "9 999 999"
 * toReadableString(1234567890.0987654); // "1 234 567 890.0987654"
 * ```
 */
function toReadableString(num: number): string;
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
 * @template Type - The type of the values being compared.
 * @param a - The first value.
 * @param b - The second value.
 * @param ignoreUndefined - Whether or not to treat `undefined` values as equal to non-existent keys.
 * @returns Whether or not the two objects are equal.
 */
function isEqual<Type>(a: Type, b: Type, ignoreUndefined: boolean = false): boolean;
```

## String

### Functions

```ts
/**
 * Converts the string to sentence case.
 * @param str - The string to convert.
 * @returns The string in sentence case.
 * @example
 * ```ts
 * toKebabCase("sentence case"); // "Sentence case"
 * ```
 */
function toSentenceCase(str: string): string;
```

```ts
/**
 * Converts the string to title case.
 * @param str - The string to convert.
 * @returns The string in title case.
 * @example
 * ```ts
 * toTitleCase("title case"); // "Title Case"
 * ```
 */
function toTitleCase(str: string): string;
```

```ts
/**
 * Converts the string to pascal case.
 * @param str - The string to convert.
 * @returns The string in pascal case.
 * @example
 * ```ts
 * toPascalCase("pascal case"); // "PascalCase"
 * ```
 */
function toPascalCase(str: string): string;
```

```ts
/**
 * Converts the string to camel case.
 * @param str - The string to convert.
 * @returns The string in camel case.
 * @example
 * ```ts
 * toCamelCase("camel case"); // "camelCase"
 * ```
 */
function toCamelCase(str: string): string;
```

```ts
/**
 * Converts the string to kebab case.
 * @param str - The string to convert.
 * @returns The string in kebab case.
 * @example
 * ```ts
 * toKebabCase("kebab case"); // "kebab-case"
 * ```
 */
function toKebabCase(str: string): string;
```

```ts
/**
 * Converts the string to snake case.
 * @param str - The string to convert.
 * @returns The string in snake case.
 * @example
 * ```ts
 * toSnakeCase("snake case"); // "snake_case"
 * ```
 */
function toSnakeCase(str: string): string;
```

```ts
/**
 * Converts the string to screaming kebab case.
 * @param str - The string to convert.
 * @returns The string in screaming kebab case.
 * @example
 * ```ts
 * toScreamingKebabCase("screaming kebab case"); // "SCREAMING-KEBAB-CASE"
 * ```
 */
function toScreamingKebabCase(str: string): string;
```

```ts
/**
 * Converts the string to screaming snake case.
 * @param str - The string to convert.
 * @returns The string in screaming snake case.
 * @example
 * ```ts
 * toScreamingSnakeCase("screaming snake case"); // "SCREAMING_SNAKE_CASE"
 * ```
 */
function toScreamingSnakeCase(str: string): string;
```

```ts
/**
 * Replaces the last instance of the given substring with a new substring.
 * @param str - The string to modify.
 * @param substr - The substring to replace the last instance of.
 * @param replacement - The substring replacement.
 * @returns The new string.
 */
function replaceLastIndexOf(str: string, substr: string, replacement: string): string;
```

```ts
/**
 * Removes the last instance of the given substring from the given string.
 * @param str - The string to modify.
 * @param substr - The substring to remove the last instance of.
 * @returns The new string.
 */
function removeLastIndexOf(str: string, substr: string): string;
```

```ts
/**
 * Escapes any special regular expression characters.
 * @param str - The string to escape.
 * @returns The escaped string.
 */
function escapeRegExp(str: string): string;
```

```ts
/**
 * Reverses the string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
function reverseString(str: string): string;
```

```ts
/**
 * Returns a random string of the given length.
 * @param length - The length of the string to be generated.
 * @returns The random string, consisting of letters and numbers.
 */
function randomString(length: number): string;
```

## Other

### Types

```ts
/**
 * A fixed length array type.
 * @template Length - The length of the array to generate.
 * @template Type - The type of the array to generate.
 */
type FixedLengthArray<
    Length extends number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Type = any,
> = Omit<FixedLengthArrayItems<Length, Type>, ArrayLengthMutationKeys>;

/** The keys of an array which can alter its length. */
type ArrayLengthMutationKeys = number | "pop" | "push" | "shift" | "splice" | "unshift";

/**
 * Recursively generates a tuple of the given length with the given type.
 * @template Length - The length of the array to generate.
 * @template Type - The type of the array to generate.
 * @template Accumulator - The current state of the array.
 */
type FixedLengthArrayItems<
    Length extends number,
    Type,
    Accumulator extends Type[] = [],
> = Accumulator["length"] extends Length
    ? Accumulator & { readonly length: Length; }
    : Accumulator["length"] extends 999
        ? Type[] & { readonly length: Length; }
        : FixedLengthArrayItems<Length, Type, [...Accumulator, Type]>;
```

```ts
/**
 * A range of numbers from Start to End. [Start, End).
 * @template Start - The start of the range, inclusive.
 * @template End - The end of the range, exclusive.
 */
type IntRange<Start extends number, End extends number> = Exclude<Enumerate<End>, Enumerate<Start>>;

/**
 * A helper type for Enumerate.
 * @template N - The number to enumerate to.
 * @template Acc - The current state of the array.
 */
type EnumerateHelper<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : EnumerateHelper<N, [...Acc, Acc["length"]]>;

/**
 * A range of numbers from 0 to N. [0, N).
 * @template N - The end of the range, exclusive.
 */
type Enumerate<N extends number> = EnumerateHelper<N>;
```

```ts
/**
 * A version of the built in `Partial` type that applies to every level of an object.
 * @template T - The type to make partial.
 */
type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
```

```ts
/**
 * A utility type which makes othe combinations of types more readable.
 * @template T - The type to prettify.
 */
type Prettify<T> = {
    [K in keyof T]: T[K];
// eslint-disable-next-line @typescript-eslint/ban-types
} & {};
```

```ts
/**
 * A function to determine if 2 values are equal.
 * @template T - The type of the values being compared.
 */
type EqualityFunction<T> = (a: T, b: T) => boolean;
```

### Functions

```ts
/**
 * Takes in an string representing an amount of time and returns the equivalent number of milliseconds.
 * @param str - The string representation of an amount of time.
 * @returns The number of milliseconds, or null if the input is invalid.
 * @example
 * ```ts
 * parseTime("5m"); // 300000
 * parseTime("1h,5m"); // 3900000
 * ```
 */
function parseTime(str: string): number | null;
```

```ts
/**
 * A memoisation function to wrap around other functions.
 * This should wrap the function definition, not the function call.
 * @template Args - The types of the arguments of the function.
 * @template Return - The return type of the function.
 * @param fn - The function to be wrapped.
 * @param serialise - A function to serialise the arguments to a string.
 * @returns A memoised version of the function.
 * @example
 * ```ts
 * // This is how you should use this function:
 * const fibonacci = memoise((n: number): number => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)));
 * fibonacci(40);
 * // This is NOT how you should use this function:
 * const fibonacci = (n: number): number => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));
 * memoise(fibonacci)(40);
 * ```
 */
function memoise<Args extends unknown[], Return>(
    fn: (...args: Args) => Return,
    serialise: (...args: Args) => string = (...args: Args): string => JSON.stringify(args),
): typeof fn;
```