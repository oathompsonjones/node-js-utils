import { getTimes, timeSince } from "../date";

describe("getTimes", () => {
    it("should return an object with the correct properties", () => {
        expect(getTimes(new Date(2003, 0, 2, 13, 30, 5, 313))).toStrictEqual({
            date: 2,
            day: "Thursday",
            hours: 13,
            milliseconds: 313,
            minutes: 30,
            month: "January",
            seconds: 5,
            year: 2003
        });
    });
});

describe("timeSince", () => {
    it("should return the correct string to represent 1 second", () => {
        expect(timeSince(Date.now() - 1000)).toBe("1s, 0ms");
    });
    it("should return the correct string to represent 1 minute", () => {
        expect(timeSince(new Date(Date.now() - 60_000))).toBe("1m, 0s, 0ms");
    });
    it("should return the correct string to represent 1 minute", () => {
        expect(timeSince(new Date(Date.now() - 60_000), ["clean"])).toBe("1m");
    });
    it("should return the correct string to represent the number of years since January 2nd 2003", () => {
        expect(timeSince(new Date(2003, 0, 2), ["y"])).toBe(`${new Date().getUTCFullYear() - 2003}y`);
    });
});
