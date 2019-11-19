Array.prototype.filterByCount = function (this: any[], occurances: number): any[] {
    const arr: any[] = [];
    this.forEach((value: any) => {
        if (this.getCount(value) === occurances) {
            arr.push(value);
        }
    });
    return arr;
};

Array.prototype.getModes = function (this: any[]): any[] {
    if (this.length === 0) return [];

    const modeMap: any = {};
    let maxCount: number = 1;
    let modes: any[] = [];

    for (const element of this) {
        if (!modeMap[element.id ? element.id : element]) modeMap[element.id ? element.id : element] = 1;
        else modeMap[element.id ? element.id : element]++;

        if (modeMap[element.id ? element.id : element] > maxCount) {
            modes = [element];
            maxCount = modeMap[element.id ? element.id : element];
        } else if (modeMap[element.id ? element.id : element] === maxCount) {
            modes.push(element);
            maxCount = modeMap[element.id ? element.id : element];
        }
    }

    return modes;
};

Array.prototype.getCount = function (this: any[], value: any): number {
    let valueCount: number = 0;
    this.forEach((arr) => {
        if (arr === value) valueCount++;
    });
    return valueCount;
};

Array.prototype.removeDuplicates = function (this: any[]): any[] {
    return [...new Set(this)];
};

Array.prototype.toListString = function (this: string[]): string {
    let string: string = "";

    for (let i = 0; i < this.length; i++) {
        string += this[i];
        if (i === this.length - 2) {
            string += " and ";
        } else if (i === this.length - 1) {
            string += ". ";
        } else {
            string += ", ";
        }
    }

    return string;
};

interface Array<T> {
    /**
     * @param occurances the number of times each item must appear in the original array.
     * @returns an array of items which appeared in the original array a set number of times.
     */
    filterByCount(occurances: number): any[];
    /**
     * @returns the most common items in the array.
     */
    getModes(): any[];
    /**
     * @param value the value to count.
     * @returns the number of times the value appears in the array.
     */
    getCount(value: any): number;
    /**
     * @returns an array with all duplicated values removed.
     */
    removeDuplicates(): any[];
    /**
     * @returns a string formatted as a list.
     */
    toListString(): string;
}