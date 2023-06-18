import { bigIntMax, bigIntMin, mapRange, randomInt } from "../math";

describe("bigIntMax", () => {
    it("should return the largest of the given bigints", () => {
        expect(bigIntMax(1n, 2n, 3n, 4n, 5n)).toBe(5n);
        expect(bigIntMax(-1n, -2n, -3n, -4n, -5n)).toBe(-1n);
        expect(bigIntMax(-2n, -1n, 0n, 1n, 2n)).toBe(2n);
    });
});

describe("bigIntMin", () => {
    it("should return the smallest of the given bigints", () => {
        expect(bigIntMin(1n, 2n, 3n, 4n, 5n)).toBe(1n);
        expect(bigIntMin(-1n, -2n, -3n, -4n, -5n)).toBe(-5n);
        expect(bigIntMin(-2n, -1n, 0n, 1n, 2n)).toBe(-2n);
    });
});

describe("mapRange", () => {
    it("should return the same value if the input and output ranges are the same", () => {
        expect(mapRange(5, 0, 10, 0, 10)).toBe(5);
    });
    it("should return the minimum output value if the input is the minimum input value", () => {
        expect(mapRange(0, 0, 10, 0, 20)).toBe(0);
    });
    it("should return the maximum output value if the input is the maximum input value", () => {
        expect(mapRange(10, 0, 10, 0, 20)).toBe(20);
    });
    it("should return the middle output value if the input is the middle input value", () => {
        expect(mapRange(5, 0, 10, 0, 20)).toBe(10);
    });
    it("should still work with negative numbers", () => {
        expect(mapRange(5, 0, 10, -10, 10)).toBe(0);
    });
    it("should still work with decimal numbers", () => {
        expect(mapRange(5, 0, 10, 0, 5)).toBe(2.5);
    });
});

describe("randomInt", () => {
    it("should not exceed the given maximum value", () => {
        for (let i = 0; i < 100; i++) {
            expect(randomInt(100)).toBeLessThan(100);
            expect(randomInt(50, 100)).toBeLessThan(100);
        }
    });
    it("should not be less than the given minimum value", () => {
        for (let i = 0; i < 100; i++) {
            expect(randomInt(100)).toBeGreaterThanOrEqual(0);
            expect(randomInt(50, 100)).toBeGreaterThanOrEqual(50);
        }
    });
});
