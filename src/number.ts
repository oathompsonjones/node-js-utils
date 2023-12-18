/**
 * Converts a number to a string, and formats it so that it is easier to read.
 *
 * @example 9999999 => 9 999 999
 * @example 1234567890.0987654 => 1 234 567 890.0987654
 * @param num The number to format.
 * @returns A readable string.
 */
export function toReadableString(num: number): string {
    const integerPart = num.toString().split(".")[0]!
        .split("")
        .reverse()
        .map((x, i) => ((i + 1) % 3 === 0 ? ` ${x}` : x))
        .reverse()
        .join("")
        .trim();
    const decimalPart = num.toString().split(".")[1] === undefined
        ? ""
        : `.${num.toString().split(".")[1]!
            .split("")
            .map((x, i) => ((i + 1) % 3 === 0 ? `${x} ` : x))
            .join("")
            .trim()
        }`;
    return integerPart + decimalPart;
}
