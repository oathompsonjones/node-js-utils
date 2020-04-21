Math.randomInt = (a: number, b?: number): number => {
    if (b === undefined) {
        b = a;
        a = 0;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
};

interface Math {
    randomInt(a: number, b?: number): number;
}