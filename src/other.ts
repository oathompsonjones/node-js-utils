/**
 * Takes in an string representing an amount of time and returns the equivalent number of milliseconds.
 *
 * @example `"5m"` => 5 minutes => `300000`
 * @example `"1h,5m"` => 1 hour and 5 minutes => `3900000`
 * @param str The string representation of an amount of time.
 * @returns The number of milliseconds, or null if the input is invalid.
 */
export function parseTime(str: string): number | null {
    const regExp = {
        day: /(?:\d+)d(?:ay)?s?/igu,
        hour: /(?:\d+)h(?:(?:ou)?r)?s?/igu,
        millisecond: /(?:\d+)m(?:illiseconds?|s)/igu,
        minute: /(?:\d+)m(?:in(?:ute)?s?)?/igu,
        month: /(?:\d+)mo(?:nth)?s?/igu,
        second: /(?:\d+)s(?:ec(?:ond)?)?s?/igu,
        week: /(?:\d+)w(?:(?:ee)?k)?s?/igu,
        year: /(?:\d+)y(?:(?:ea)?r)?s?/igu,
    };

    const times: string[] = str.replace(/\s/gu, "").split(",");

    if (!times.some((time) => time.match(regExp.year) !== null ||
        time.match(regExp.month) !== null ||
        time.match(regExp.week) !== null ||
        time.match(regExp.day) !== null ||
        time.match(regExp.hour) !== null ||
        time.match(regExp.minute) !== null ||
        time.match(regExp.second) !== null ||
        time.match(regExp.millisecond) !== null))
        return null;

    let ms = 0;

    times.forEach((time) => {
        if (time.match(regExp.millisecond) !== null)
            ms += parseInt(time.match(regExp.millisecond)?.[0] ?? "0", 10);
        else if (time.match(regExp.month) !== null)
            ms += 365.25 / 12 * 24 * 60 * 60 * 1000 * parseInt(time.match(regExp.month)?.[0] ?? "0", 10);
        else if (time.match(regExp.minute) !== null)
            ms += 60 * 1000 * parseInt(time.match(regExp.minute)?.[0] ?? "0", 10);
        else if (time.match(regExp.second) !== null)
            ms += 1000 * parseInt(time.match(regExp.second)?.[0] ?? "0", 10);
        else if (time.match(regExp.hour) !== null)
            ms += 60 * 60 * 1000 * parseInt(time.match(regExp.hour)?.[0] ?? "0", 10);
        else if (time.match(regExp.day) !== null)
            ms += 24 * 60 * 60 * 1000 * parseInt(time.match(regExp.day)?.[0] ?? "0", 10);
        else if (time.match(regExp.week) !== null)
            ms += 7 * 24 * 60 * 60 * 1000 * parseInt(time.match(regExp.week)?.[0] ?? "0", 10);
        else if (time.match(regExp.year) !== null)
            ms += 365.25 * 24 * 60 * 60 * 1000 * parseInt(time.match(regExp.year)?.[0] ?? "0", 10);
    });

    return ms;
}

/**
 * A memoisation function to wrap around other functions.
 * This should wrap the function definition, not the function call.
 *
 * @example
 * // This is how you should use this function:
 * const fibonacci = memoise((n: number): number => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)));
 * fibonacci(40);
 * // This is NOT how you should use this function:
 * const fibonacci = (n: number): number => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));
 * memoise(fibonacci)(40);
 *
 * @param fn The function to be wrapped.
 * @param serialise A function to serialise the arguments to a string.
 * @returns A memoised version of the function.
 */
export function memoise<Args extends unknown[], Return>(
    fn: (...args: Args) => Return,
    serialise: (...args: Args) => string = (...args: Args): string => JSON.stringify(args),
): typeof fn {
    const cache = new Map<string, Return>();

    return (...args: Args): Return => {
        const key = serialise(...args);

        return cache.get(key) ?? cache.set(key, fn(...args)).get(key)!;
    };
}
