export function parseTime(str: string): number | null {
    const regExp: { [time in "year" | "month" | "week" | "day" | "hour" | "minute" | "second" | "millisecond"]: RegExp } = {
        year: /(\d+)y((ea)?r)?/ig,
        month: /(\d+)mo(nth)?/ig,
        week: /(\d+)w((ee)?k)?/ig,
        day: /(\d+)d(ay)?/ig,
        hour: /(\d+)h((ou)?r)?/ig,
        minute: /(\d+)m(in(ute)?)?/ig,
        second: /(\d+)s(ec(ond)?)?/ig,
        millisecond: /(\d+)m(illisecond|s)/ig
    };
    const values: { [time in "year" | "month" | "week" | "day" | "hour" | "minute" | "second" | "millisecond"]: number } = {
        year: 365.25 * 24 * 60 * 60 * 1e3,
        month: 365.25 / 12 * 24 * 60 * 60 * 1e3,
        week: 7 * 24 * 60 * 60 * 1e3,
        day: 24 * 60 * 60 * 1e3,
        hour: 60 * 60 * 1e3,
        minute: 60 * 1e3,
        second: 1e3,
        millisecond: 1
    };

    const times: string[] = str.replace(/\s/g, "").split(",");
    if (!times.some((time) =>
        time.match(regExp.year) !== null
        || time.match(regExp.month) !== null
        || time.match(regExp.week) !== null
        || time.match(regExp.day) !== null
        || time.match(regExp.hour) !== null
        || time.match(regExp.minute) !== null
        || time.match(regExp.second) !== null
        || time.match(regExp.millisecond) !== null
    )) return null;

    let ms: number = 0;
    times.forEach((time) => {
        if (time.match(regExp.millisecond) !== null) 
            ms += values.millisecond * parseInt(time.match(regExp.millisecond)?.[0] ?? "0");
        else if (time.match(regExp.second) !== null) 
            ms += values.second * parseInt(time.match(regExp.second)?.[0] ?? "0");
        else if (time.match(regExp.minute) !== null) 
            ms += values.minute * parseInt(time.match(regExp.minute)?.[0] ?? "0");
        else if (time.match(regExp.hour) !== null) 
            ms += values.hour * parseInt(time.match(regExp.hour)?.[0] ?? "0");
        else if (time.match(regExp.day) !== null) 
            ms += values.day * parseInt(time.match(regExp.day)?.[0] ?? "0");
        else if (time.match(regExp.week) !== null) 
            ms += values.week * parseInt(time.match(regExp.week)?.[0] ?? "0");
        else if (time.match(regExp.month) !== null) 
            ms += values.month * parseInt(time.match(regExp.month)?.[0] ?? "0");
        else if (time.match(regExp.year) !== null) 
            ms += values.year * parseInt(time.match(regExp.year)?.[0] ?? "0");
    });

    return ms;
}