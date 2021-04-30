import "../";

Object.equal = function (obj1: { [k: string]: any; }, obj2: { [k: string]: any; }): boolean {
    if (typeof obj1 !== typeof obj2) return false;
    const obj1Keys: string[] = Object.keys(obj1).sort();
    const obj2Keys: string[] = Object.keys(obj2).sort();
    if (obj1Keys.length !== obj2Keys.length) return false;
    for (let i = 0; i < obj1Keys.length; ++i) {
        const thisKey: string = obj1Keys[i];
        const thisObj1Val: any = obj1[thisKey];
        const thisObj2Val: any = obj2[thisKey];
        if (typeof thisObj1Val !== typeof thisObj2Val) return false;
        if (typeof thisObj1Val === "object" && !Object.equal(thisObj1Val, thisObj2Val)) return false;
        if (thisObj1Val !== thisObj2Val) return false;
    }
    return true;
};