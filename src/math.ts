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
export function mapRange(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/**
 * Returns a random integer in the range [0, b).
 *
 * @param {number} maxValue The maximum possible value.
 * @return {number} Returns a random integer between 0 and b.
 */
export function randomInt(maxValue: number): number;
/**
 * Returns a random integer in the range [a, b).
 *
 * @param {number} minValue The minimum possible value.
 * @param {number} maxValue The maximum possible value.
 * @return {number} Returns a random integer between a and b.
 */
export function randomInt(minValue: number, maxValue: number): number;
export function randomInt(minValue: number, maxValue?: number): number {
    return maxValue === undefined
        ? Math.floor(Math.random() * minValue)
        : Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

/**
 * A Math.max method for the BigInt type.
 *
 * @param {...bigint[]} args Numeric expressions to be evaluated.
 * @returns {bigint} Returns the larger of a set of supplied numeric expressions.
 */
export function bigIntMax(...args: bigint[]): bigint {
    return args.reduce((prev, curr) => (curr > prev ? curr : prev));
}

/**
 * A Math.min method for the BigInt type.
 *
 * @param {...bigint[]} args Numeric expressions to be evaluated.
 * @returns {bigint} Returns the smaller of a set of supplied numeric expressions.
 */
export function bigIntMin(...args: bigint[]): bigint {
    return args.reduce((prev, curr) => (curr < prev ? curr : prev));
}
