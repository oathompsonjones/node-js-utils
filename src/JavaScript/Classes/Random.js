"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    static integer(lowerBound, upperBound) {
        const max = Math.floor(upperBound) + 1;
        const min = Math.ceil(lowerBound);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static float() {
        return Math.random();
    }
    static string(length) {
        let str = "";
        for (let i = 0; i < length; i++)
            str += this.integer(1, 2) % 2 ? this.integer(1, 36).toString(36).toUpperCase() : this.integer(1, 36).toString(36);
        return str;
    }
}
exports.Random = Random;
