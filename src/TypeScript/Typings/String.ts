String.prototype.toSentenceCase = function (this: string): string {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};

String.prototype.toTitleCase = function (this: string): string {
    return this.toLowerCase().split(" ").map((str) => str.toSentenceCase()).join(" ");
};

String.prototype.toCamelCase = function (this: string): string {
    return this.toTitleCase().replace(/ /g, "").replace(this.split("")[0], this.split("")[0].toLowerCase());
};

String.prototype.toPascalCase = function (this: string): string {
    return this.toTitleCase().replace(/ /g, "");
};

String.prototype.toHyphenCase = function (this: string): string {
    return this.toLowerCase().replace(/ /g, "-");
};

String.prototype.toSnakeCase = function (this: string): string {
    return this.toLowerCase().replace(/ /g, "_");
};

String.prototype.toArray = function (this: string, length: number): string[] {
    let message: string = this;
    const msgArray: string[] = [];
    if (message.length > length) {
        let str: string = "";
        let pos: number;
        while (message.length > 0) {
            pos = message.length > length ? message.lastIndexOf("\n", length) : message.length;
            if (pos > length) pos = length;
            str = message.substr(0, pos);
            message = message.substr(pos);
            msgArray.push(str);
        }
    } else msgArray.push(message);
    return msgArray;
};

String.prototype.removeLastIndexOf = function (this: string, str: string): string {
    let string: string = this;
    const index: number = string.lastIndexOf(str);
    if (index >= 0) string = string.substring(0, index) + string.substring(index + str.length);
    return string;
};

interface String {
    toSentenceCase(): string;
    toTitleCase(): string;
    toCamelCase(): string;
    toPascalCase(): string;
    toHyphenCase(): string;
    toSnakeCase(): string;
    toArray(length: number): string[];
    removeLastIndexOf(str: string): string;
}