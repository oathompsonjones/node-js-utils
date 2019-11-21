export class Random {
    constructor(private lowerBound: number, private upperBound: number = NaN) {
        if (!this.upperBound) {
            this.upperBound = this.lowerBound;
            this.lowerBound = 0;
        }
    }

    nextInt(): number {
        return Math.floor(Math.random() * this.upperBound + this.lowerBound);
    }
}