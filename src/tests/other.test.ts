import { describe, expect, test } from "vitest";
import { memoise, parseTime } from "../other.js";

describe("memoise", () => {
    const fibonacci1 = (n: number): number => (n < 2 ? n : fibonacci1(n - 1) + fibonacci1(n - 2));
    const fibonacci2 = memoise((n: number): number => (n < 2 ? n : fibonacci2(n - 1) + fibonacci2(n - 2)));

    test("should return the same value as the original function", () => {
        expect(memoise(fibonacci1)(10)).toBe(fibonacci1(10));
        expect(fibonacci2(10)).toBe(fibonacci1(10));
    });
});

describe("parseTime", () => {
    const MS = 1;
    const S = 1_000;
    const M = 60_000;
    const H = 3_600_000;
    const D = 86_400_000;
    const W = 604_800_000;
    const MO = 2_629_800_000;
    const Y = 31_557_600_000;

    test("should be able to parse each way of writing milliseconds", () => {
        expect(parseTime("1milliseconds")).toBe(MS);
        expect(parseTime("1millisecond")).toBe(MS);
        expect(parseTime("1ms")).toBe(MS);
    });
    test("should be able to parse each way of writing seconds", () => {
        expect(parseTime("1seconds")).toBe(S);
        expect(parseTime("1second")).toBe(S);
        expect(parseTime("1ss")).toBe(S);
        expect(parseTime("1s")).toBe(S);
    });
    test("should be able to parse each way of writing minutes", () => {
        expect(parseTime("1minutes")).toBe(M);
        expect(parseTime("1minute")).toBe(M);
        expect(parseTime("1mins")).toBe(M);
        expect(parseTime("1min")).toBe(M);
        expect(parseTime("1m")).toBe(M);
    });
    test("should be able to parse each way of writing hours", () => {
        expect(parseTime("1hours")).toBe(H);
        expect(parseTime("1hour")).toBe(H);
        expect(parseTime("1hrs")).toBe(H);
        expect(parseTime("1hr")).toBe(H);
        expect(parseTime("1hs")).toBe(H);
        expect(parseTime("1h")).toBe(H);
    });
    test("should be able to parse each way of writing days", () => {
        expect(parseTime("1days")).toBe(D);
        expect(parseTime("1day")).toBe(D);
        expect(parseTime("1ds")).toBe(D);
        expect(parseTime("1d")).toBe(D);
    });
    test("should be able to parse each way of writing weeks", () => {
        expect(parseTime("1weeks")).toBe(W);
        expect(parseTime("1week")).toBe(W);
        expect(parseTime("1wks")).toBe(W);
        expect(parseTime("1wk")).toBe(W);
        expect(parseTime("1ws")).toBe(W);
        expect(parseTime("1w")).toBe(W);
    });
    test("should be able to parse each way of writing months", () => {
        expect(parseTime("1months")).toBe(MO);
        expect(parseTime("1month")).toBe(MO);
        expect(parseTime("1mos")).toBe(MO);
        expect(parseTime("1mo")).toBe(MO);
    });
    test("should be able to parse each way of writing years", () => {
        expect(parseTime("1years")).toBe(Y);
        expect(parseTime("1year")).toBe(Y);
        expect(parseTime("1yrs")).toBe(Y);
        expect(parseTime("1yr")).toBe(Y);
        expect(parseTime("1ys")).toBe(Y);
        expect(parseTime("1y")).toBe(Y);
    });

    const total = Y + 2 * MO + 3 * W + 4 * D + 5 * H + 6 * M + 7 * S + 8 * MS;

    test("should return the total number of milliseconds", () => {
        expect(parseTime("1y,2mo,3w,4d,5h,6m,7s,8ms")).toBe(total);
    });
});
