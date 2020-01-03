export class Random {
    integer(lowerBound: number, upperBound: number): number {
        const max = Math.floor(upperBound) + 1;
        const min = Math.ceil(lowerBound);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    float(): number {
        return Math.random();
    }

    string(length: number): string {
        let str = "";
        for (let i = 0; i < length; i++) str += this.integer(1, 2) % 2 ? this.integer(1, 36).toString(36).toUpperCase() : this.integer(1, 36).toString(36);
        return str;
    }
}