/**
 * A fixed length array type.
 * @template Length - The length of the array to generate.
 * @template Type - The type of the array to generate.
 */
export type FixedLengthArray<
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

/**
 * A range of numbers from Start to End. [Start, End).
 * @template Start - The start of the range, inclusive.
 * @template End - The end of the range, exclusive.
 */
export type IntRange<Start extends number, End extends number> = Exclude<Enumerate<End>, Enumerate<Start>>;

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
export type Enumerate<N extends number> = EnumerateHelper<N>;

/**
 * A function to determine if 2 values are equal.
 * @template T - The type of the values being compared.
 */
export type EqualityFunction<T> = (a: T, b: T) => boolean;

/**
 * A version of the built in `Partial` type that applies to every level of an object.
 * @template T - The type to make partial.
 */
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

/**
 * A utility type which makes othe combinations of types more readable.
 * @template T - The type to prettify.
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
// eslint-disable-next-line @typescript-eslint/ban-types
} & {};
