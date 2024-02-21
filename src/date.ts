export enum Days {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
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
    December = 11,
}

export type DateTime = {
    day: keyof typeof Days;
    date: number;
    month: keyof typeof Months;
    year: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};

/**
 * Creates an object which shows each property of the Date and Time.
 * @param date - The date.
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
        year: date.getUTCFullYear(),
    };
}

/**
 * Takes a date and calculates how much time has passed since.
 * @param date - The date as either a Date object or an EpochTimeStamp.
 * @param formatOptions - The format.
 * @returns A string representing how much time has passed.
 */
export function timeSince(
    date: Date | EpochTimeStamp,
    formatOptions: Array<"clean" | "d" | "full" | "h" | "m" | "mo" | "ms" | "s" | "w" | "y"> = [],
): string {
    const timeElaspsed = new Date(Date.now() - date.valueOf());
    const utc = {
        date: timeElaspsed.getUTCDate() - 1,
        hours: timeElaspsed.getUTCHours(),
        milliseconds: timeElaspsed.getUTCMilliseconds(),
        minutes: timeElaspsed.getUTCMinutes(),
        month: timeElaspsed.getUTCMonth(),
        seconds: timeElaspsed.getUTCSeconds(),
        weeks: Math.floor((timeElaspsed.getUTCDate() - 1) / 7),
        year: timeElaspsed.getUTCFullYear(),
    };

    if (formatOptions.length === 0) {
        if (utc.year - 1970 > 0)
            return `${utc.year - 1970}y, ${utc.month}mo, ${utc.weeks}w, ${utc.date % 7}d`;

        if (utc.month > 0)
            return `${utc.month}mo, ${utc.weeks}w, ${utc.date % 7}d, ${utc.hours}h`;

        if (utc.weeks > 0)
            return `${utc.weeks}w, ${utc.date % 7}d, ${utc.hours}h, ${utc.minutes}m`;

        if (utc.date % 7 > 0)
            return `${utc.date}d, ${utc.hours}h, ${utc.minutes}m, ${utc.seconds}s`;

        if (utc.hours > 0)
            return `${utc.hours}h, ${utc.minutes}m, ${utc.seconds}s, ${utc.milliseconds}ms`;

        if (utc.minutes > 0)
            return `${utc.minutes}m, ${utc.seconds}s, ${utc.milliseconds}ms`;

        if (utc.seconds > 0)
            return `${utc.seconds}s, ${utc.milliseconds}ms`;

        return `${utc.milliseconds}ms`;
    }

    const arr: string[] = [];
    const clean: boolean = formatOptions.includes("clean");
    let format = formatOptions;

    if (formatOptions.length === 1 && clean || formatOptions.includes("full"))
        format = ["y", "mo", "w", "d", "h", "m", "s", "ms"];

    if (format.includes("y") && (clean ? utc.year - 1970 > 0 : true))
        arr.push(`${utc.year - 1970}y`);

    if (format.includes("mo") && (clean ? utc.month > 0 : true))
        arr.push(`${utc.month}mo`);

    if (format.includes("w") && (clean ? utc.weeks > 0 : true))
        arr.push(`${utc.weeks}w`);

    if (format.includes("d") && (clean ? utc.date % 7 > 0 : true))
        arr.push(`${utc.date % 7}d`);

    if (format.includes("h") && (clean ? utc.hours > 0 : true))
        arr.push(`${utc.hours}h`);

    if (format.includes("m") && (clean ? utc.minutes > 0 : true))
        arr.push(`${utc.minutes}m`);

    if (format.includes("s") && (clean ? utc.seconds > 0 : true))
        arr.push(`${utc.seconds}s`);

    if (format.includes("ms") && (clean ? utc.milliseconds > 0 : true))
        arr.push(`${utc.milliseconds}ms`);

    return arr.join(", ");
}
