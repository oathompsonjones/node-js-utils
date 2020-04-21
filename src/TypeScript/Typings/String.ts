String.prototype.toSentenceCase = function (this: string): string {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};

String.prototype.toTitleCase = function (this: string): string {
    return this.toLowerCase().split(" ").map((str) => str.toSentenceCase()).join(" ");
};

String.prototype.toCamelCase = function (this: string): string {
    return this.toTitleCase().replace(/ /g, "").replace(this.split("")[0].toUpperCase(), this.split("")[0].toLowerCase());
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

String.prototype.toArray = function (this: string, length: number, seperator: string = ""): string[] {
    if (length < 2) return this.split("");
    let len: number = length;
    if (this.split(seperator).map((str) => str.length + 1).filter((num) => num > length).length) len = Math.max(...this.split(seperator).map((str) => str.length + 1));
    let message: string = this;
    const msgArray: string[] = [];
    if (message.length > len) {
        let str: string = "";
        let pos: number;
        while (message.length > 0) {
            pos = message.length > len ? message.lastIndexOf(seperator, len) : message.length;
            if (pos > len) pos = len;
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

String.prototype.escapeRegExp = function (this: string): string {
    return this.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

String.prototype.reverse = function (this: string): string {
    return this.split("").reverse().join("");
};

interface String {
    toSentenceCase(): string;
    toTitleCase(): string;
    toCamelCase(): string;
    toPascalCase(): string;
    toHyphenCase(): string;
    toSnakeCase(): string;
    toArray(length: number, seperator?: string): string[];
    removeLastIndexOf(str: string): string;
    escapeRegExp(): string;
    reverse(): string;
}

String.random = (length: number): string => {
    let str = "";
    for (let i = 0; i < length; i++) str += Math.floor(Math.random() * 2 + 1) % 2 ? Math.floor(Math.random() * 36 + 1).toString(36).toUpperCase() : Math.floor(Math.random() * 36 + 1).toString(36);
    return str;
};

interface StringConstructor {
    random(length: number): string;
}