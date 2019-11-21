"use strict";
Array.prototype.filterByCount = function (occurances) {
    const arr = [];
    this.forEach((value) => {
        if (this.getCount(value) === occurances) {
            arr.push(value);
        }
    });
    return arr;
};
Array.prototype.getModes = function () {
    if (this.length === 0)
        return [];
    const modeMap = {};
    let maxCount = 1;
    let modes = [];
    for (const element of this) {
        if (!modeMap[element.id ? element.id : element])
            modeMap[element.id ? element.id : element] = 1;
        else
            modeMap[element.id ? element.id : element]++;
        if (modeMap[element.id ? element.id : element] > maxCount) {
            modes = [element];
            maxCount = modeMap[element.id ? element.id : element];
        }
        else if (modeMap[element.id ? element.id : element] === maxCount) {
            modes.push(element);
            maxCount = modeMap[element.id ? element.id : element];
        }
    }
    return modes;
};
Array.prototype.getCount = function (value) {
    let valueCount = 0;
    this.forEach((arr) => {
        if (arr === value)
            valueCount++;
    });
    return valueCount;
};
Array.prototype.removeDuplicates = function () {
    return [...new Set(this)];
};
Array.prototype.toListString = function () {
    let string = "";
    for (let i = 0; i < this.length; i++) {
        string += this[i];
        if (i === this.length - 2) {
            string += " and ";
        }
        else if (i === this.length - 1) {
            string += ". ";
        }
        else {
            string += ", ";
        }
    }
    return string;
};
