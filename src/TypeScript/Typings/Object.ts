Object.prototype.equals = function (this: { [key: string]: any }, obj: { [key: string]: any }): boolean {
    let equal = false;
    Object.keys(this).forEach((key) => {
        if (this[key] !== obj[key]) equal = false;
    });
    Object.keys(obj).forEach((key) => {
        if (obj[key] !== this[key]) equal = false;
    });
    return equal;
}

interface Object {
    equals: (obj: Object) => boolean;
}