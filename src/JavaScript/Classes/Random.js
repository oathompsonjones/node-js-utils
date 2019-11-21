"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    integer(lowerBound, upperBound) {
        return Math.floor(Math.random() * upperBound) + lowerBound;
    }
    float() {
        return Math.random();
    }
    string(length) {
        let str = "";
        for (let i = 0; i < length; i++)
            str += this.integer(1, 2) % 2 ? this.integer(1, 36).toString(36).toUpperCase() : this.integer(1, 36).toString(36);
        return str;
    }
}
exports.Random = Random;
