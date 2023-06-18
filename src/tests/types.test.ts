import type { Enumerate, FixedLengthArray, IntRange } from "../types";

describe("Enumerate", () => {
    it("should work", () => {
        // @ts-expect-error -1 is not in the range [0, 5)
        let testEnumerate: Enumerate<5> = -1;
        // @ts-expect-no-error 0 is in the range [0, 5)
        testEnumerate = 0;
        // @ts-expect-no-error 1 is in the range [0, 5)
        testEnumerate = 1;
        // @ts-expect-no-error 2 is in the range [0, 5)
        testEnumerate = 2;
        // @ts-expect-no-error 3 is in the range [0, 5)
        testEnumerate = 3;
        // @ts-expect-no-error 4 is in the range [0, 5)
        testEnumerate = 4;
        // @ts-expect-error 5 is not in the range [0, 5)
        testEnumerate = 5;
        expect(testEnumerate).toBe(testEnumerate);
    });
});

describe("FixedLengthArray", () => {
    it("should work", () => {
        // @ts-expect-error 0 is not in the range (0, 5]
        let testFixedLengthArray: FixedLengthArray<5, number> = [];
        // @ts-expect-error 1 is not in the range (0, 5]
        testFixedLengthArray = [0];
        // @ts-expect-error 2 is not in the range (0, 5]
        testFixedLengthArray = [0, 1];
        // @ts-expect-error 3 is not in the range (0, 5]
        testFixedLengthArray = [0, 1, 2];
        // @ts-expect-error 4 is not in the range (0, 5]
        testFixedLengthArray = [0, 1, 2, 3];
        // @ts-expect-no-error 5 is in the range (0, 5]
        testFixedLengthArray = [0, 1, 2, 3, 4];
        // @ts-expect-error 6 is not in the range (0, 5]
        testFixedLengthArray = [0, 1, 2, 3, 4, 5];
        expect(testFixedLengthArray).toBe(testFixedLengthArray);
    });
});

describe("IntRange", () => {
    it("should work", () => {
        // @ts-expect-error -1 is not in the range [0, 5)
        let testIntRange: IntRange<0, 5> = -1;
        // @ts-expect-no-error 0 is in the range [0, 5)
        testIntRange = 0;
        // @ts-expect-no-error 1 is in the range [0, 5)
        testIntRange = 1;
        // @ts-expect-no-error 2 is in the range [0, 5)
        testIntRange = 2;
        // @ts-expect-no-error 3 is in the range [0, 5)
        testIntRange = 3;
        // @ts-expect-no-error 4 is in the range [0, 5)
        testIntRange = 4;
        // @ts-expect-error 5 is not in the range [0, 5)
        testIntRange = 5;
        expect(testIntRange).toBe(testIntRange);
    });
});
