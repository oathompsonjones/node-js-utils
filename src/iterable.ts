import type { EqualityFunction } from "./index.js";
import { isEqual } from "./object.js";

/**
 * A contains function for any interable type.
 * Checks if a given iterable contains a given value.
 * For Maps, it checks if the key exists.
 *
 * @param iterable The iterable to check the value for.
 * @param value The value to check for.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns Whether or not the iterable contains the value.
 */
export function contains<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): boolean {
    if (areEqual === isEqual && (typeof value !== "object" || value === null))
        return [...iterable].includes(value);

    for (const val of iterable) {
        if (areEqual(val, value))
            return true;
    }

    return false;
}

/**
 * Creates a new iterable which doesn't contain any duplicate values.
 *
 * @param iterable The iterable to remove duplicates from.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array containing the values of the original iterable, but without any duplicates.
 */
export function removeDuplicates<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[] {
    const array: Type[] = [];

    for (const value of iterable) {
        if (!contains(array, value, areEqual))
            array.push(value);
    }

    return array;
}

/**
 * Gets the union of two iterables. A ∪ B
 *
 * @param A The first iterable.
 * @param B The second iterable.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The union of the two iterables.
 */
export function union<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB> {
    const ATypes = [...A].map((val) => (val === null ? "null" : typeof val));
    const BTypes = [...B].map((val) => (val === null ? "null" : typeof val));

    if (areEqual === isEqual && !ATypes.includes("object") && !BTypes.includes("object"))
        return [...new Set([...A, ...B])];

    const set = new Set<TypeA | TypeB>([...A]);

    for (const value of B) {
        if (!contains<TypeA | TypeB>(A, value, areEqual))
            set.add(value);
    }

    return [...set];
}

/**
 * Gets the intersection of two iterables. A ∩ B
 *
 * @param A The first iterable.
 * @param B The second iterable.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The intersection of the two iterables.
 */
export function intersection<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB> {
    return [...new Set([...A].filter((element) => contains<TypeA | TypeB>(B, element, areEqual)))];
}

/**
 * Gets the difference of two iterables. A \ B
 *
 * @param A The first iterable.
 * @param B The second iterable.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The difference of the two iterables.
 */
export function difference<TypeA, TypeB>(
    A: Iterable<TypeA>,
    B: Iterable<TypeB>,
    areEqual: EqualityFunction<TypeA | TypeB> = isEqual,
): Array<TypeA | TypeB> {
    return [...new Set([...A].filter((element) => !contains<TypeA | TypeB>(B, element, areEqual)))];
}

/**
 * Equivalent to using `Array#join(", ")`, but the last command is replaced by `"and"`, and `"."` is added to the end.
 *
 * @param iterable The iterable to create a list from.
 * @param toString A function to turn the value into a string. Defaults to `String(value)`.
 * @returns The list.
 */
export function toListString<Type>(
    iterable: Iterable<Type>,
    toString: (value: Type) => string = (value: Type): string => String(value),
): string {
    const arr = [...iterable];

    return `${arr.slice(1).reduce((a, b, i) => (i < arr.length - 2
        ? `${a}, ${toString(b)}`
        : `${a} and ${toString(b)}`
    ), toString(arr[0]!))}.`;
}

/**
 * Counts how many times a given value appears in the given iterable.
 *
 * @param iterable The iterable.
 * @param value The value to count.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The number of times the element appears in the iterable.
 */
export function countElement<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number {
    return [...iterable].filter((element) => areEqual(value, element)).length;
}

/**
 * Creates a new array which contains only the values which appear the given number of times.
 *
 * @param iterable The iterable to filter.
 * @param occurrences The number of times an element needs to appear.
 * @param includeExcessOccurances Whether or not to include items which appear more than the given number of times.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array contianing only the elements which apppear enough times in the original array.
 */
export function filterByCount<Type>(
    iterable: Iterable<Type>,
    occurrences: number,
    includeExcessOccurances: boolean = false,
    areEqual: EqualityFunction<Type> = isEqual,
): Iterable<Type> {
    const noDuplicates = removeDuplicates(iterable, areEqual);
    const counts: number[] = noDuplicates.map((value) => countElement(iterable, value, areEqual));

    return noDuplicates.filter((_, i) => (includeExcessOccurances ? counts[i]! >= occurrences : counts[i] === occurrences));
}

/**
 * Finds the most common element(s) in the iterable.
 *
 * @param iterable The iterable to filter.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns An array of the most common element(s) in the iterable.
 */
export function getModes<Type>(iterable: Iterable<Type>, areEqual: EqualityFunction<Type> = isEqual): Type[] {
    const noDuplicates = removeDuplicates(iterable, areEqual);
    const counts: number[] = noDuplicates.map((value) => countElement(iterable, value, areEqual));
    const maxCount = Math.max(...counts);

    return noDuplicates.filter((_, i) => counts[i] === maxCount);
}

/**
 * Creates a new array, containing the original array, split into smaller arrays.
 *
 * @param iterable The array to split.
 * @param maxLength The maximum length of each subarray.
 * @returns The new array.
 */
export function splitIterable<Type>(iterable: Iterable<Type>, maxLength: number): Type[][] {
    const arrCopy = [...iterable];
    const output: Type[][] = [];

    while (arrCopy.length)
        output.push(arrCopy.splice(0, maxLength));

    return output;
}

/**
 * Create a new array, removing any occurances of the given value.
 *
 * @param iterable The array to remove the value from.
 * @param value The value to remove.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The new array.
 */
export function removeValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): Type[] {
    return [...iterable].filter((val) => !areEqual(val, value));
}

/**
 * Creates a new array, containing the elements of the original array, in a random order.
 *
 * @param iterable The iterable to shuffle
 * @returns The new array.
 */
export function shuffle<Type>(iterable: Iterable<Type>): Type[] {
    const arr = [...iterable];
    let unusedIndicies: number[] = [...arr.keys()];
    const newArray: Type[] = Array(arr.length) as Type[];

    arr.forEach((value) => {
        const index: number = unusedIndicies[Math.floor(Math.random() * unusedIndicies.length)]!;

        newArray[index] = value;
        unusedIndicies = unusedIndicies.filter((x) => x !== index);
    });

    return newArray;
}

/**
 * Just like `Array#indexOf(value)`, but this checks if any two values are equal rather than just their reference.
 *
 * @param iterable The iterable to find the value in.
 * @param value The value to find the index of.
 * @param areEqual A function to determine if two values are equal. Defaults to the equality function provided by this package.
 * @returns The index of the value if it was found, -1 otherwise.
 */
export function indexOfValue<Type>(iterable: Iterable<Type>, value: Type, areEqual: EqualityFunction<Type> = isEqual): number {
    const arr = [...iterable];

    for (let i = 0; i < arr.length; i++) {
        if (areEqual(value, arr[i]!))
            return i;
    }

    return -1;
}
