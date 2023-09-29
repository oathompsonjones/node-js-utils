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

/**
 * A function to determine if 2 values are equal.
 *
 * @typedef {EqualityFunction}
 * @template T The type of the two values.
 */
export type EqualityFunction<T> = (a: T, b: T) => boolean;

/**
 * A version of the built in `Partial` type that applies to every level of an object.
 *
 * @typedef {DeepPartial}
 * @template T The type to make partial.
 */
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

/**
 * A utility type which makes othe combinations of types more readable.
 *
 * @typedef {Prettify}
 * @template T The type to prettify.
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
// eslint-disable-next-line @typescript-eslint/ban-types
} & {};
