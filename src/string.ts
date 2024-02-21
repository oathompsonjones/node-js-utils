/**
 * Converts the string to sentence case.
 * @example
 * ```ts
 * toKebabCase("sentence case"); // "Sentence case"
 * ```
 * @param str - The string to convert.
 * @returns The string in sentence case.
 */
export function toSentenceCase(str: string): string {
    return str.toLowerCase()
        .split(" ")
        .map((word, i) => (i === 0 ? word.replace(word[0]!, word[0]!.toUpperCase()) : word))
        .join(" ");
}

/**
 * Converts the string to title case.
 * @example
 * ```ts
 * toTitleCase("title case"); // "Title Case"
 * ```
 * @param str - The string to convert.
 * @returns The string in title case.
 */
export function toTitleCase(str: string): string {
    return str.toLowerCase()
        .split(" ")
        .map((word) => word.replace(word[0]!, word[0]!.toUpperCase()))
        .join(" ");
}

/**
 * Converts the string to pascal case.
 * @example
 * ```ts
 * toPascalCase("pascal case"); // "PascalCase"
 * ```
 * @param str - The string to convert.
 * @returns The string in pascal case.
 */
export function toPascalCase(str: string): string {
    return str.toLowerCase()
        .split(" ")
        .map((word) => word.replace(word[0]!, word[0]!.toUpperCase()))
        .join("");
}

/**
 * Converts the string to camel case.
 * @example
 * ```ts
 * toCamelCase("camel case"); // "camelCase"
 * ```
 * @param str - The string to convert.
 * @returns The string in camel case.
 */
export function toCamelCase(str: string): string {
    return str.toLowerCase()
        .split(" ")
        .map((word, i) => (i > 0 ? word.replace(word[0]!, word[0]!.toUpperCase()) : word))
        .join("");
}

/**
 * Converts the string to kebab case.
 * @example
 * ```ts
 * toKebabCase("kebab case"); // "kebab-case"
 * ```
 * @param str - The string to convert.
 * @returns The string in kebab case.
 */
export function toKebabCase(str: string): string {
    return str.toLowerCase().replace(/\s/gu, "-");
}

/**
 * Converts the string to snake case.
 * @example
 * ```ts
 * toSnakeCase("snake case"); // "snake_case"
 * ```
 * @param str - The string to convert.
 * @returns The string in snake case.
 */
export function toSnakeCase(str: string): string {
    return str.toLowerCase().replace(/\s/gu, "_");
}

/**
 * Converts the string to screaming kebab case.
 * @example
 * ```ts
 * toScreamingKebabCase("screaming kebab case"); // "SCREAMING-KEBAB-CASE"
 * ```
 * @param str - The string to convert.
 * @returns The string in screaming kebab case.
 */
export function toScreamingKebabCase(str: string): string {
    return str.toUpperCase().replace(/\s/gu, "-");
}

/**
 * Converts the string to screaming snake case.
 * @example
 * ```ts
 * toScreamingSnakeCase("screaming snake case"); // "SCREAMING_SNAKE_CASE"
 * ```
 * @param str - The string to convert.
 * @returns The string in screaming snake case.
 */
export function toScreamingSnakeCase(str: string): string {
    return str.toUpperCase().replace(/\s/gu, "_");
}

/**
 * Replaces the last instance of the given substring with a new substring.
 * @param str - The string to modify.
 * @param substr - The substring to replace the last instance of.
 * @param replacement - The substring replacement.
 * @returns The new string.
 */
export function replaceLastIndexOf(str: string, substr: string, replacement: string): string {
    const index: number = str.lastIndexOf(substr);
    const copy = [...str];

    if (index >= 0)
        copy.splice(index, substr.length, replacement);

    return copy.join("");
}

/**
 * Removes the last instance of the given substring from the given string.
 * @param str - The string to modify.
 * @param substr - The substring to remove the last instance of.
 * @returns The new string.
 */
export function removeLastIndexOf(str: string, substr: string): string {
    return replaceLastIndexOf(str, substr, "");
}

/**
 * Escapes any special regular expression characters.
 * @param str - The string to escape.
 * @returns The escaped string.
 */
export function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

/**
 * Reverses the string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function reverseString(str: string): string {
    return str.split("")
        .reverse()
        .join("");
}

/**
 * Returns a random string of the given length.
 * @param length - The length of the string.
 * @returns The random string.
 */
export function randomString(length: number): string {
    let str = "";

    for (let i = 0; i < length; i++) {
        str += Math.floor(Math.random() * 2) % 2
            ? Math.floor(Math.random() * 36).toString(36)
                .toUpperCase()
            : Math.floor(Math.random() * 36).toString(36);
    }

    return str;
}
