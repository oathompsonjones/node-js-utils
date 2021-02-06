import "../../";

String.prototype.toSentenceCase = function (): string {
    return this.toLowerCase().replace(this[0], this[0].toUpperCase());
};

String.prototype.toTitleCase = function (): string {
    return this.toLowerCase().split(" ").map((str) => str.toSentenceCase()).join(" ");
};

String.prototype.toPascalCase = function (): string {
    return this.toTitleCase().replace(/\s/g, "");
};

String.prototype.toCamelCase = function (): string {
    return this.toPascalCase().replace(this[0].toUpperCase(), this[0].toLowerCase());
};

String.prototype.toHyphenCase = function (): string {
    return this.toLowerCase().replace(/\s/g, "-");
};

String.prototype.toSnakeCase = function (): string {
    return this.toLowerCase().replace(/\s/g, "_");
};

String.prototype.removeLastIndexOf = function (str: string): string {
    let string: string = this.toString();
    const index: number = string.lastIndexOf(str);
    if (index >= 0) string = string.substring(0, index) + string.substring(index + str.length);
    return string;
};

String.prototype.escapeRegExp = function (): string {
    return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

String.prototype.reverse = function (): string {
    return this.split("").reverse().join("");
};

String.random = function (length: number): string {
    let str = "";
    for (let i = 0; i < length; i++) str += Math.floor(Math.random() * 2) % 2 ? Math.floor(Math.random() * 36).toString(36).toUpperCase() : Math.floor(Math.random() * 36).toString(36);
    return str;
};