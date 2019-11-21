"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    constructor(lowerBound, upperBound = NaN) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        if (!this.upperBound) {
            this.upperBound = this.lowerBound;
            this.lowerBound = 0;
        }
    }
    nextInt() {
        return Math.floor(Math.random() * this.upperBound + this.lowerBound);
    }
}
exports.Random = Random;
