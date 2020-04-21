Number.prototype.toReadableString = function (this: number): string {
    return this.toString().split(".")[0].reverse().toArray(3).join(",").reverse() + (this.toString().split(".")[1] ? `.${this.toString().split(".")[1]}` : "");
}

interface Number {
    toReadableString(): string;
}