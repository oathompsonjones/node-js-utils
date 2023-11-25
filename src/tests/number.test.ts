import { describe, expect, test } from "vitest";
import { toReadableString } from "../number.js";

describe("toReadableString", () => {
    test("should return the same string for numbers less than 1000", () => {
        for (let i = 0; i < 1000; i++)
            expect(toReadableString(i)).toBe(i.toString());
    });
    test("should groups digits into triplets, leaving the first digit in a smaller group", () => {
        expect(toReadableString(9999999999)).toBe("9 999 999 999");
        expect(toReadableString(999999999)).toBe("999 999 999");
        expect(toReadableString(99999999)).toBe("99 999 999");
    });
    test("should add a space every 3 digits after a decimal point", () => {
        expect(toReadableString(Math.PI)).toBe("3.141 592 653 589 793");
        expect(toReadableString(Math.E)).toBe("2.718 281 828 459 045");
        expect(toReadableString(Math.PI * Math.E / 10)).toBe("0.853 973 422 267 356 6");
    });
});
