"use strict";
Object.prototype.equals = function (obj) {
    let equal = false;
    Object.keys(this).forEach((key) => {
        if (this[key] !== obj[key])
            equal = false;
    });
    Object.keys(obj).forEach((key) => {
        if (obj[key] !== this[key])
            equal = false;
    });
    return equal;
};
