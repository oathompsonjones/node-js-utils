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
 * @param a The first value.
 * @param b The second value.
 * @returns Whether or not the two objects are equal.
 */
export function isEqual<Type>(a: Type, b: Type): boolean {
    const aType = a === null ? "null" : typeof a;
    const bType = b === null ? "null" : typeof b;

    // Check that they are the same type and not a function.
    if (aType !== bType)
        return false;

    // Use strict equality (===) if they are primitive, null, or a function.
    if (["undefined", "boolean", "number", "bigint", "string", "function", "null"].includes(aType))
        return a === b;

    // Handle symbols.
    if (aType === "symbol")
        return (a as symbol).toString() === (b as symbol).toString();

    // Handle objects.
    const obj1 = a as Record<string, unknown>;
    const obj2 = b as Record<string, unknown>;
    // Get the keys of each object.
    const obj1Keys: string[] = Object.keys(obj1)
        .sort((x, y) => (x > y ? -1 : 1));
    const obj2Keys: string[] = Object.keys(obj2)
        .sort((x, y) => (x > y ? -1 : 1));

    // Check that the keys are the same.

    if (obj1Keys.length !== obj2Keys.length || JSON.stringify(obj1Keys) !== JSON.stringify(obj2Keys))
        return false;

    // Check that the value associated with each key is the same.
    for (const key of obj1Keys) {
        const obj1Val = obj1[key];
        const obj2Val = obj2[key];

        if (!isEqual(obj1Val, obj2Val))
            return false;
    }

    // If everything has passed so far, they must be equal.
    return true;
}
