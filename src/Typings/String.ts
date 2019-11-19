String.prototype.toProperCase = function (this: string): string {
    return this.toLowerCase().replace(this.split("")[0], this.split("")[0].toUpperCase());
};

String.prototype.toTitleCase = function (this: string): string {
    return this.toLowerCase().split(" ").map((str) => str.toProperCase()).join(" ");
};

String.prototype.toArray = function (this: string, length: number): string[] {
    let message = this;
    const msgArray = [];

    if (message.length > length) {
        let str = "";
        let pos;

        while (message.length > 0) {
            // split on last newline
            pos = message.length > length ? message.lastIndexOf("\n", length) : message.length;

            // if there's no newlines
            if (pos > length) {
                pos = length;
            }

            // grab the substring, and remove from message
            str = message.substr(0, pos);
            message = message.substr(pos);

            // push to array
            msgArray.push(str);
        }
    } else {
        msgArray.push(message);
    }

    return msgArray;
};

String.prototype.removeLastIndexOf = function (this: string, str: string): string {
    let string: string = this;
    const index = string.lastIndexOf(str);
    if (index >= 0 && index + str.length >= string.length) {
        string = string.substring(0, index);
    }
    return string;
};

interface String {
    /**
    * @returns the string as lower case, with the first character upper case.
    */
    toProperCase(): string;
    /**
    * @returns the string with every word as proper case.
    */
    toTitleCase(): string;
    /**
    * @param length the maximum length of each string in the array.
    * @returns an array of strings.
    */
    toArray(length: number): string[];
    /**
    * @param str the substring to be removed.
    * @returns the string with the last index of str removed.
    */
    removeLastIndexOf(str: string): string;
}