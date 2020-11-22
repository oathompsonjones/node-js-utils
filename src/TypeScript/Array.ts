import "../../";

Array.prototype.filterByCount = function (occurances: number): any[] {
    const arr: any[] = [];
    this.forEach((value: any) => {
        if (this.getCount(value) === occurances) arr.push(value);
    });
    return arr;
};

Array.prototype.getModes = function (): any[] {
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

Array.prototype.getCount = function (value: any): number {
    let valueCount: number = 0;
    this.forEach((arr) => {
        if (arr === value) valueCount++;
    });
    return valueCount;
};

Array.prototype.removeDuplicates = function (): any[] {
    return [...new Set(this)];
};

Array.prototype.toListString = function (): string {
    let string: string = "";
    for (let i = 0; i < this.length; i++) {
        string += this[i].toString();
        if (i === this.length - 2) string += " and ";
        else if (i === this.length - 1) string += ". ";
        else string += ", ";
    }
    return string;
};

Array.prototype.split = function (maxLength: number): any[][] {
    const arr = [...this];
    let output: any[][] = [];
    while (arr.length) output.push(arr.splice(0, maxLength));
    return output;
};

Array.prototype.remove = function (value: any): any[] {
    const newArray: any[] = [];
    this.forEach((val) => {
        if (val !== value) newArray.push(val);
    });
    return newArray;
};

Array.prototype.shuffle = function (): any[] {
    let unusedIndexes: number[] = [...this.keys()];
    const newArray: any[] = Array(this.length);
    this.forEach((value) => {
        const index: number = unusedIndexes[Math.floor(Math.random() * unusedIndexes.length)];
        newArray[index] = value;
        unusedIndexes = unusedIndexes.remove(index);
    });
    return newArray;
};