String.prototype.toProperCase = function (this: string): string {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};

String.prototype.toTitleCase = function (this: string): string {
    return this.toLowerCase().split(" ").map((str) => str.toProperCase()).join(" ");
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
    if (index >= 0) string = string.substring(0, index) + string.substring(index + 1, string.length);
    return string;
};

interface String {
    toProperCase(): string;
    toTitleCase(): string;
    toArray(length: number): string[];
    removeLastIndexOf(str: string): string;
}