Set.prototype.union = function (set: Set<any>): Set<any> {
    return new Set([...this, ...set]);
};

Set.prototype.intersection = function (set: Set<any>): Set<any> {
    const returnSet = new Set();
    for (const value of [...this, ...set])
        if (this.has(value) && set.has(value))
            returnSet.add(value);
    return returnSet;
};