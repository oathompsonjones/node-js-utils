import {
    contains,
    countElement,
    difference,
    filterByCount,
    getModes,
    indexOfValue,
    intersection,
    removeDuplicates,
    removeValue,
    shuffle,
    splitIterable,
    toListString,
    union
} from "../iterable";

describe("contains", () => {
    it("should work correctly for arrays", () => {
        expect(contains([1, 2, 3], 3)).toBe(true);
        expect(contains([1, 2, 3], 0)).toBe(false);
    });
    it("should work correctly for maps", () => {
        expect(contains(new Map([[1, 1], [2, 2], [3, 3]]), [0, 0])).toBe(false);
        expect(contains(new Map([[1, 1], [2, 2], [3, 3]]), [3, 3])).toBe(true);
    });
    it("should work correctly for sets", () => {
        expect(contains(new Set([1, 2, 3]), 3)).toBe(true);
        expect(contains(new Set([1, 2, 3]), 0)).toBe(false);
    });
    it("should work correctly for strings", () => {
        expect(contains("123", "3")).toBe(true);
        expect(contains("123", "0")).toBe(false);
    });
    it("should work correctly for typed arrays", () => {
        expect(contains(new Int32Array([1, 2, 3]), 3)).toBe(true);
        expect(contains(new Int32Array([1, 2, 3]), 0)).toBe(false);
        expect(contains(new Uint32Array([1, 2, 3]), 3)).toBe(true);
        expect(contains(new Uint32Array([1, 2, 3]), 0)).toBe(false);
    });
});

describe("countElement", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    it("should work correctly for arrays", () => {
        expect(countElement(input, 3)).toBe(3);
        expect(countElement(input, 0)).toBe(0);
    });
    it("should work correctly for maps", () => {
        expect(countElement(new Map(input.map((x) => [x, x])), [3, 3])).toBe(1);
        expect(countElement(new Map(input.map((x) => [x, x])), [0, 0])).toBe(0);
    });
    it("should work correctly for sets", () => {
        expect(countElement(new Set(input), 3)).toBe(1);
        expect(countElement(new Set(input), 0)).toBe(0);
    });
    it("should work correctly for strings", () => {
        expect(countElement(input.join(""), "3")).toBe(3);
        expect(countElement(input.join(""), "0")).toBe(0);
    });
    it("should work correctly for typed arrays", () => {
        expect(countElement(new Int32Array(input), 3)).toBe(3);
        expect(countElement(new Int32Array(input), 0)).toBe(0);
        expect(countElement(new Uint32Array(input), 3)).toBe(3);
        expect(countElement(new Uint32Array(input), 0)).toBe(0);
    });
});

describe("difference", () => {
    it("should work correctly for arrays", () => {
        expect([...difference([1, 2, 3], [3, 4, 5])]).toStrictEqual([1, 2]);
    });
    it("should work correctly for maps", () => {
        expect([...difference(new Map([[1, 1], [2, 2], [3, 3]]), new Map([[3, 3], [4, 4], [5, 5]]))]).toStrictEqual([[1, 1], [2, 2]]);
    });
    it("should work correctly for sets", () => {
        expect([...difference(new Set([1, 2, 3]), new Set([3, 4, 5]))]).toStrictEqual([1, 2]);
    });
    it("should work correctly for strings", () => {
        expect([...difference("123", "345")]).toStrictEqual(["1", "2"]);
    });
    it("should work correctly for typed arrays", () => {
        expect([...difference(new Int32Array([1, 2, 3]), new Int32Array([3, 4, 5]))]).toStrictEqual([1, 2]);
        expect([...difference(new Uint32Array([1, 2, 3]), new Uint32Array([3, 4, 5]))]).toStrictEqual([1, 2]);
    });
});

describe("filterByCount", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    it("should work correctly for arrays", () => {
        expect(filterByCount(input, 0)).toStrictEqual([]);
        expect(filterByCount(input, 3)).toStrictEqual([3]);
        expect(filterByCount(input, 3, true)).toStrictEqual([3, 4, 5]);
    });
    it("should work correctly for maps", () => {
        expect(filterByCount(new Map(input.map((x) => [x, x])), 0)).toStrictEqual([]);
        expect(filterByCount(new Map(input.map((x) => [x, x])), 3)).toStrictEqual([]);
        expect(filterByCount(new Map(input.map((x) => [x, x])), 3, true)).toStrictEqual([]);
        expect(filterByCount(new Map(input.map((x) => [x, x])), 1)).toStrictEqual([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
        expect(filterByCount(new Map(input.map((x) => [x, x])), 1, true)).toStrictEqual([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
    });
    it("should work correctly for sets", () => {
        expect(filterByCount(new Set(input), 0)).toStrictEqual([]);
        expect(filterByCount(new Set(input), 3)).toStrictEqual([]);
        expect(filterByCount(new Set(input), 3, true)).toStrictEqual([]);
        expect(filterByCount(new Set(input), 1)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(filterByCount(new Set(input), 1, true)).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should work correctly for strings", () => {
        expect(filterByCount(input.join(""), 0)).toStrictEqual([]);
        expect(filterByCount(input.join(""), 3)).toStrictEqual(["3"]);
        expect(filterByCount(input.join(""), 3, true)).toStrictEqual(["3", "4", "5"]);
    });
    it("should work correctly for typed arrays", () => {
        expect(filterByCount(new Int32Array(input), 0)).toStrictEqual([]);
        expect(filterByCount(new Int32Array(input), 3)).toStrictEqual([3]);
        expect(filterByCount(new Int32Array(input), 3, true)).toStrictEqual([3, 4, 5]);
        expect(filterByCount(new Uint32Array(input), 0)).toStrictEqual([]);
        expect(filterByCount(new Uint32Array(input), 3)).toStrictEqual([3]);
        expect(filterByCount(new Uint32Array(input), 3, true)).toStrictEqual([3, 4, 5]);
    });
});

describe("getModes", () => {
    it("should work correctly for arrays", () => {
        expect(getModes([1, 2, 3])).toStrictEqual([1, 2, 3]);
        expect(getModes([1, 2, 2, 3])).toStrictEqual([2]);
        expect(getModes([1, 2, 2, 3, 3])).toStrictEqual([2, 3]);
    });
    it("should work correctly for maps", () => {
        expect(getModes(new Map([[1, 1], [2, 2], [3, 3]]))).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
        expect(getModes(new Map([[1, 1], [2, 2], [2, 2], [3, 3]]))).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
        expect(getModes(new Map([[1, 1], [2, 2], [2, 2], [3, 3], [3, 3]]))).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
    });
    it("should work correctly for sets", () => {
        expect(getModes(new Set([1, 2, 3]))).toStrictEqual([1, 2, 3]);
        expect(getModes(new Set([1, 2, 2, 3]))).toStrictEqual([1, 2, 3]);
        expect(getModes(new Set([1, 2, 2, 3, 3]))).toStrictEqual([1, 2, 3]);
    });
    it("should work correctly for strings", () => {
        expect(getModes("123")).toStrictEqual(["1", "2", "3"]);
        expect(getModes("1223")).toStrictEqual(["2"]);
        expect(getModes("12233")).toStrictEqual(["2", "3"]);
    });
    it("should work correctly for typed arrays", () => {
        expect(getModes(new Int32Array([1, 2, 3]))).toStrictEqual([1, 2, 3]);
        expect(getModes(new Int32Array([1, 2, 2, 3]))).toStrictEqual([2]);
        expect(getModes(new Int32Array([1, 2, 2, 3, 3]))).toStrictEqual([2, 3]);
        expect(getModes(new Uint32Array([1, 2, 3]))).toStrictEqual([1, 2, 3]);
        expect(getModes(new Uint32Array([1, 2, 2, 3]))).toStrictEqual([2]);
        expect(getModes(new Uint32Array([1, 2, 2, 3, 3]))).toStrictEqual([2, 3]);
    });
});

describe("indexOfValue", () => {
    it("should work correctly for arrays", () => {
        expect(indexOfValue([1, 2, 3], 3)).toBe(2);
        expect(indexOfValue([3, 4, 5], 3)).toBe(0);
        expect(indexOfValue([3, 4, 5], 6)).toBe(-1);
    });
    it("should work correctly for maps", () => {
        expect(indexOfValue(new Map([[1, 1], [2, 2], [3, 3]]), [3, 3])).toBe(2);
        expect(indexOfValue(new Map([[3, 3], [4, 4], [5, 5]]), [3, 3])).toBe(0);
        expect(indexOfValue(new Map([[3, 3], [4, 4], [5, 5]]), [6, 6])).toBe(-1);
    });
    it("should work correctly for sets", () => {
        expect(indexOfValue(new Set([1, 2, 3]), 3)).toBe(2);
        expect(indexOfValue(new Set([3, 4, 5]), 3)).toBe(0);
        expect(indexOfValue(new Set([3, 4, 5]), 6)).toBe(-1);
    });
    it("should work correctly for strings", () => {
        expect(indexOfValue("123", "3")).toBe(2);
        expect(indexOfValue("345", "3")).toBe(0);
        expect(indexOfValue("345", "6")).toBe(-1);
    });
    it("should work correctly for typed arrays", () => {
        expect(indexOfValue(new Int32Array([1, 2, 3]), 3)).toBe(2);
        expect(indexOfValue(new Int32Array([3, 4, 5]), 3)).toBe(0);
        expect(indexOfValue(new Int32Array([3, 4, 5]), 6)).toBe(-1);
        expect(indexOfValue(new Uint32Array([1, 2, 3]), 3)).toBe(2);
        expect(indexOfValue(new Uint32Array([3, 4, 5]), 3)).toBe(0);
        expect(indexOfValue(new Uint32Array([3, 4, 5]), 6)).toBe(-1);
    });
});

describe("intersection", () => {
    it("should work correctly for arrays", () => {
        expect([...intersection([1, 2, 3], [3, 4, 5])]).toStrictEqual([3]);
        expect([...intersection([3, 4, 5], [1, 2, 3])]).toStrictEqual([3]);
    });
    it("should work correctly for maps", () => {
        expect([...intersection(new Map([[1, 1], [2, 2], [3, 3]]), new Map([[3, 3], [4, 4], [5, 5]]))]).toStrictEqual([[3, 3]]);
        expect([...intersection(new Map([[3, 3], [4, 4], [5, 5]]), new Map([[1, 1], [2, 2], [3, 3]]))]).toStrictEqual([[3, 3]]);
    });
    it("should work correctly for sets", () => {
        expect([...intersection(new Set([1, 2, 3]), new Set([3, 4, 5]))]).toStrictEqual([3]);
        expect([...intersection(new Set([3, 4, 5]), new Set([1, 2, 3]))]).toStrictEqual([3]);
    });
    it("should work correctly for strings", () => {
        expect([...intersection("123", "345")]).toStrictEqual(["3"]);
        expect([...intersection("345", "123")]).toStrictEqual(["3"]);
    });
    it("should work correctly for typed arrays", () => {
        expect([...intersection(new Int32Array([1, 2, 3]), new Int32Array([3, 4, 5]))]).toStrictEqual([3]);
        expect([...intersection(new Int32Array([3, 4, 5]), new Int32Array([1, 2, 3]))]).toStrictEqual([3]);
        expect([...intersection(new Uint32Array([1, 2, 3]), new Uint32Array([3, 4, 5]))]).toStrictEqual([3]);
        expect([...intersection(new Uint32Array([3, 4, 5]), new Uint32Array([1, 2, 3]))]).toStrictEqual([3]);
    });
});

describe("removeDuplicates", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    it("should work correctly for arrays", () => {
        expect(removeDuplicates(input)).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should work correctly for maps", () => {
        expect(removeDuplicates(new Map(input.map((x) => [x, x])))).toStrictEqual([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
    });
    it("should work correctly for sets", () => {
        expect(removeDuplicates(new Set(input))).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should work correctly for strings", () => {
        expect(removeDuplicates(input.join(""))).toStrictEqual(["1", "2", "3", "4", "5"]);
    });
    it("should work correctly for typed arrays", () => {
        expect(removeDuplicates(new Int32Array(input))).toStrictEqual([1, 2, 3, 4, 5]);
        expect(removeDuplicates(new Uint32Array(input))).toStrictEqual([1, 2, 3, 4, 5]);
    });
});

describe("removeValue", () => {
    it("should work correctly for arrays", () => {
        expect(removeValue([1, 2, 3], 2)).toStrictEqual([1, 3]);
        expect(removeValue([1, 2, 3], 4)).toStrictEqual([1, 2, 3]);
    });
    it("should work correctly for maps", () => {
        expect(removeValue(new Map([[1, 1], [2, 2], [3, 3]]), [2, 2])).toStrictEqual([[1, 1], [3, 3]]);
        expect(removeValue(new Map([[1, 1], [2, 2], [3, 3]]), [4, 4])).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
    });
    it("should work correctly for sets", () => {
        expect(removeValue(new Set([1, 2, 3]), 2)).toStrictEqual([1, 3]);
        expect(removeValue(new Set([1, 2, 3]), 4)).toStrictEqual([1, 2, 3]);
    });
    it("should work correctly for strings", () => {
        expect(removeValue("123", "2")).toStrictEqual(["1", "3"]);
        expect(removeValue("123", "4")).toStrictEqual(["1", "2", "3"]);
    });
    it("should work correctly for typed arrays", () => {
        expect(removeValue(new Int32Array([1, 2, 3]), 2)).toStrictEqual([1, 3]);
        expect(removeValue(new Int32Array([1, 2, 3]), 4)).toStrictEqual([1, 2, 3]);
        expect(removeValue(new Uint32Array([1, 2, 3]), 2)).toStrictEqual([1, 3]);
        expect(removeValue(new Uint32Array([1, 2, 3]), 4)).toStrictEqual([1, 2, 3]);
    });
});

describe("shuffle", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    describe("should not give the same result as the input", () => {
        it("should work correctly for arrays", () => {
            expect(shuffle(input)).not.toStrictEqual(input);
        });
        it("should work correctly for maps", () => {
            expect(shuffle(new Map(input.map((x) => [x, x])))).not.toStrictEqual(input.map((x) => [x, x]));
        });
        it("should work correctly for sets", () => {
            expect(shuffle(new Set(input))).not.toStrictEqual(input);
        });
        it("should work correctly for strings", () => {
            expect(shuffle(input.join(""))).not.toStrictEqual(input);
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Int32Array(input))).not.toStrictEqual(input);
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Uint32Array(input))).not.toStrictEqual(input);
        });
    });
    describe("should have all the same values as the input", () => {
        it("should work correctly for arrays", () => {
            expect(shuffle(input).sort((a, b) => a - b)).toStrictEqual(input);
        });
        it("should work correctly for maps", () => {
            expect(shuffle(new Map(input.map((x) => [x, x]))).sort(([a], [b]) => a - b)).toStrictEqual(input.map((x) => [x, x]));
        });
        it("should work correctly for sets", () => {
            expect(shuffle(new Set(input)).sort((a, b) => a - b)).toStrictEqual(input);
        });
        it("should work correctly for strings", () => {
            expect(shuffle(input.join("")).sort((a, b) => Number(a) - Number(b)).join("")).toStrictEqual("011111111223344556789");
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Int32Array(input)).sort((a, b) => a - b)).toStrictEqual(input);
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Uint32Array(input)).sort((a, b) => a - b)).toStrictEqual(input);
        });
    });
    describe("should have the same length as the input", () => {
        it("should work correctly for arrays", () => {
            expect(shuffle(input)).toHaveLength(input.length);
        });
        it("should work correctly for maps", () => {
            expect(shuffle(new Map(input.map((x) => [x, x])))).toHaveLength(input.length);
        });
        it("should work correctly for sets", () => {
            expect(shuffle(new Set(input))).toHaveLength(input.length);
        });
        it("should work correctly for strings", () => {
            expect(shuffle(input.join(""))).toHaveLength(input.length + 6);
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Int32Array(input))).toHaveLength(input.length);
        });
        it("should work correctly for typed arrays", () => {
            expect(shuffle(new Uint32Array(input))).toHaveLength(input.length);
        });
    });
});

describe("splitIterable", () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    it("should work correctly for arrays", () => {
        expect(splitIterable(input, 3)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15]]);
    });
    it("should work correctly for maps", () => {
        expect(splitIterable(new Map(input.map((x) => [x, x])), 3)).toStrictEqual([
            [[0, 0], [1, 1], [2, 2]],
            [[3, 3], [4, 4], [5, 5]],
            [[6, 6], [7, 7], [8, 8]],
            [[9, 9], [10, 10], [11, 11]],
            [[12, 12], [13, 13], [14, 14]],
            [[15, 15]]
        ]);
    });
    it("should work correctly for sets", () => {
        expect(splitIterable(new Set(input), 3)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15]]);
    });
    it("should work correctly for strings", () => {
        expect(splitIterable(input.join(""), 3)).toStrictEqual([
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["9", "1", "0"],
            ["1", "1", "1"],
            ["2", "1", "3"],
            ["1", "4", "1"],
            ["5"]
        ]);
    });
    it("should work correctly for typed arrays", () => {
        expect(splitIterable(new Int32Array(input), 3))
            .toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15]]);
        expect(splitIterable(new Uint32Array(input), 3))
            .toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15]]);
    });
});

describe("toListString", () => {
    it("should work correctly for arrays", () => {
        expect(toListString([1, 2, 3, 4, 5])).toBe("1, 2, 3, 4 and 5.");
        expect(toListString([1, 2, 3, 4, 5], (num: number): string => ["One", "Two", "Three", "Four", "Five"][num - 1]!))
            .toBe("One, Two, Three, Four and Five.");
    });
    it("should work correctly for maps", () => {
        expect(toListString(new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]))).toBe("1,1, 2,2, 3,3, 4,4 and 5,5.");
    });
    it("should work correctly for sets", () => {
        expect(toListString(new Set([1, 2, 3, 4, 5]))).toBe("1, 2, 3, 4 and 5.");
    });
    it("should work correctly for strings", () => {
        expect(toListString("12345")).toBe("1, 2, 3, 4 and 5.");
    });
    it("should work correctly for typed arrays", () => {
        expect(toListString(new Int32Array([1, 2, 3, 4, 5]))).toBe("1, 2, 3, 4 and 5.");
        expect(toListString(new Uint32Array([1, 2, 3, 4, 5]))).toBe("1, 2, 3, 4 and 5.");
    });
});

describe("union", () => {
    it("should work correctly for arrays", () => {
        expect([...union([1, 2, 3], [3, 4, 5])]).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should work correctly for maps", () => {
        expect([...union(new Map([[1, 1], [2, 2], [3, 3]]), new Map([[3, 3], [4, 4], [5, 5]]))])
            .toStrictEqual([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]);
    });
    it("should work correctly for sets", () => {
        expect([...union(new Set([1, 2, 3]), new Set([3, 4, 5]))]).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should work correctly for strings", () => {
        expect([...union("123", "345")]).toStrictEqual(["1", "2", "3", "4", "5"]);
    });
    it("should work correctly for typed arrays", () => {
        expect([...union(new Int32Array([1, 2, 3]), new Int32Array([3, 4, 5]))]).toStrictEqual([1, 2, 3, 4, 5]);
        expect([...union(new Uint32Array([1, 2, 3]), new Uint32Array([3, 4, 5]))]).toStrictEqual([1, 2, 3, 4, 5]);
    });
});
