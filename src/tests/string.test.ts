import { describe, expect, test } from "vitest";
import {
    escapeRegExp,
    randomString,
    removeLastIndexOf,
    replaceLastIndexOf,
    reverseString,
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toScreamingKebabCase,
    toScreamingSnakeCase,
    toSentenceCase,
    toSnakeCase,
    toTitleCase,
} from "../string.js";

describe("escapeRegExp", () => {
    test("should escape all special characters", () => {
        expect(escapeRegExp(".*+?^${}()|[]\\")).toBe("\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\");
    });
});

describe("randomString", () => {
    test("should return a string of the given length", () => {
        expect(randomString(5)).toHaveLength(5);
        expect(randomString(10)).toHaveLength(10);
        expect(randomString(15)).toHaveLength(15);
        expect(randomString(20)).toHaveLength(20);
        expect(randomString(25)).toHaveLength(25);
    });
    test("should return a string of the given length with only alphanumeric characters", () => {
        expect(randomString(5)).toMatch(/[0-9a-zA-Z]{5}/u);
        expect(randomString(10)).toMatch(/[0-9a-zA-Z]{10}/u);
        expect(randomString(15)).toMatch(/[0-9a-zA-Z]{15}/u);
        expect(randomString(20)).toMatch(/[0-9a-zA-Z]{20}/u);
        expect(randomString(25)).toMatch(/[0-9a-zA-Z]{25}/u);
    });
});

describe("removeLastIndexOf", () => {
    test("should return the string if the substring isn't in the string", () => {
        expect(removeLastIndexOf("This is a string without the substring.", "This substring isn't in the string."))
            .toBe("This is a string without the substring.");
    });
    test("should return the string with the last instance of the substring removed", () => {
        expect(removeLastIndexOf("This string has only one instance of the substring.", "substring"))
            .toBe("This string has only one instance of the .");
        expect(removeLastIndexOf("This string has several instances of the substring.", "s"))
            .toBe("This string has several instances of the subtring.");
    });
});

describe("replaceLastIndexOf", () => {
    test("should return the string if the substring isn't in the string", () => {
        expect(replaceLastIndexOf("This is a string without the substring.", "This substring isn't in the string.", "Irrelavent"))
            .toBe("This is a string without the substring.");
    });
    test("should return the string with the last instance of the substring replaced", () => {
        expect(replaceLastIndexOf("This string has only one instance of the substring.", "substring", "SUBSTRING"))
            .toBe("This string has only one instance of the SUBSTRING.");
        expect(replaceLastIndexOf("This string has several instances of the substring.", "s", "S"))
            .toBe("This string has several instances of the subString.");
    });
});

describe("reverseString", () => {
    test("should return the string reversed", () => {
        expect(reverseString("")).toBe("");
        expect(reverseString("12345")).toBe("54321");
        expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
        expect(reverseString("aibohphobia")).toBe("aibohphobia");
    });
});

describe("toCamelCase", () => {
    test("should return the string in camel case", () => {
        expect(toCamelCase("to camel case")).toBe("toCamelCase");
        expect(toCamelCase("TO CAMEL CASE")).toBe("toCamelCase");
    });
});

describe("toKebabCase", () => {
    test("should return the string in kebab case", () => {
        expect(toKebabCase("to kebab case")).toBe("to-kebab-case");
        expect(toKebabCase("TO KEBAB CASE")).toBe("to-kebab-case");
    });
});

describe("toPascalCase", () => {
    test("should return the string in pascal case", () => {
        expect(toPascalCase("to pascal case")).toBe("ToPascalCase");
        expect(toPascalCase("TO PASCAL CASE")).toBe("ToPascalCase");
    });
});

describe("toScreamingKebabCase", () => {
    test("should return the string in screaming kebab case", () => {
        expect(toScreamingKebabCase("to screaming kebab case")).toBe("TO-SCREAMING-KEBAB-CASE");
        expect(toScreamingKebabCase("TO SCREAMING KEBAB CASE")).toBe("TO-SCREAMING-KEBAB-CASE");
    });
});

describe("toScreamingSnakeCase", () => {
    test("should return the string in screaming snake case", () => {
        expect(toScreamingSnakeCase("to screaming snake case")).toBe("TO_SCREAMING_SNAKE_CASE");
        expect(toScreamingSnakeCase("TO SCREAMING SNAKE CASE")).toBe("TO_SCREAMING_SNAKE_CASE");
    });
});

describe("toSentenceCase", () => {
    test("should return the string in sentence case", () => {
        expect(toSentenceCase("to sentence case")).toBe("To sentence case");
        expect(toSentenceCase("TO SENTENCE CASE")).toBe("To sentence case");
    });
});

describe("toSnakeCase", () => {
    test("should return the string in snake case", () => {
        expect(toSnakeCase("to snake case")).toBe("to_snake_case");
        expect(toSnakeCase("TO SNAKE CASE")).toBe("to_snake_case");
    });
});

describe("toTitleCase", () => {
    test("should return the string in title case", () => {
        expect(toTitleCase("to title case")).toBe("To Title Case");
        expect(toTitleCase("TO TITLE CASE")).toBe("To Title Case");
    });
});
