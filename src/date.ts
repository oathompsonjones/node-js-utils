export enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 0
}

export enum Months {
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

export interface DateTime {
    day: keyof typeof Days;
    date: number;
    month: keyof typeof Months;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}

/**
 * Creates an object which shows each property of the Date and Time.
 *
 * @param date The date.
 * @returns An object expressing each property of the Date and Time.
 */
export function getTimes(date: Date): DateTime {
    return {
        date: date.getUTCDate(),
        day: Days[date.getUTCDay()]! as keyof typeof Days,
        hours: date.getUTCHours(),
        milliseconds: date.getUTCMilliseconds(),
        minutes: date.getUTCMinutes(),
        month: Months[date.getUTCMonth()]! as keyof typeof Months,
        seconds: date.getUTCSeconds(),
        year: date.getUTCFullYear()
    };
}

/**
 * Takes a date and calculates how much time has passed since.
 *
 * @param date The date as either a Date object or an EpochTimeStamp.
 * @param formatOptions The format.
 * @returns A string representing how much time has passed.
 */
export function timeSince(
    date: Date | EpochTimeStamp,
    formatOptions: Array<"clean" | "d" | "full" | "h" | "m" | "mo" | "ms" | "s" | "w" | "y"> = []
): string {
    const timeElaspsed = new Date(Date.now() - date.valueOf());
    const utcDate = timeElaspsed.getUTCDate() - 1,
        utcHours = timeElaspsed.getUTCHours(),
        utcMilliseconds = timeElaspsed.getUTCMilliseconds(),
        utcMinutes = timeElaspsed.getUTCMinutes(),
        utcMonth = timeElaspsed.getUTCMonth(),
        utcSeconds = timeElaspsed.getUTCSeconds(),
        utcWeeks: number = Math.floor(utcDate / 7),
        utcYear = timeElaspsed.getUTCFullYear();
    if (!formatOptions.length) {
        if (utcYear - 1970 > 0)
            return `${utcYear - 1970}y, ${utcMonth}mo, ${utcWeeks}w, ${utcDate % 7}d`;
        if (utcMonth > 0)
            return `${utcMonth}mo, ${utcWeeks}w, ${utcDate % 7}d, ${utcHours}h`;
        if (utcWeeks > 0)
            return `${utcWeeks}w, ${utcDate % 7}d, ${utcHours}h, ${utcMinutes}m`;
        if (utcDate % 7 > 0)
            return `${utcDate}d, ${utcHours}h, ${utcMinutes}m, ${utcSeconds}s`;
        if (utcHours > 0)
            return `${utcHours}h, ${utcMinutes}m, ${utcSeconds}s, ${utcMilliseconds}ms`;
        if (utcMinutes > 0)
            return `${utcMinutes}m, ${utcSeconds}s, ${utcMilliseconds}ms`;
        if (utcSeconds > 0)
            return `${utcSeconds}s, ${utcMilliseconds}ms`;
        return `${utcMilliseconds}ms`;
    }
    const arr: string[] = [];
    const clean: boolean = formatOptions.includes("clean");
    let format = formatOptions;
    if (formatOptions.length === 1 && clean || formatOptions.includes("full"))
        format = ["y", "mo", "w", "d", "h", "m", "s", "ms"];
    if (format.includes("y") && (clean ? utcYear - 1970 > 0 : true))
        arr.push(`${utcYear - 1970}y`);
    if (format.includes("mo") && (clean ? utcMonth > 0 : true))
        arr.push(`${utcMonth}mo`);
    if (format.includes("w") && (clean ? utcWeeks > 0 : true))
        arr.push(`${utcWeeks}w`);
    if (format.includes("d") && (clean ? utcDate % 7 > 0 : true))
        arr.push(`${utcDate % 7}d`);
    if (format.includes("h") && (clean ? utcHours > 0 : true))
        arr.push(`${utcHours}h`);
    if (format.includes("m") && (clean ? utcMinutes > 0 : true))
        arr.push(`${utcMinutes}m`);
    if (format.includes("s") && (clean ? utcSeconds > 0 : true))
        arr.push(`${utcSeconds}s`);
    if (format.includes("ms") && (clean ? utcMilliseconds > 0 : true))
        arr.push(`${utcMilliseconds}ms`);
    return arr.join(", ");
}
