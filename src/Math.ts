import "../";

Math.randomInt = (a: number, b?: number): number => {
    if (b === undefined) {
        b = a;
        a = 0;
    };
    return Math.floor(Math.random() * (b - a + 1) + a);
};
Math.bigIntMax = (...args: bigint[]): bigint => args.reduce((m, e) => e > m ? e : m);
Math.bigIntMin = (...args: bigint[]): bigint => args.reduce((m, e) => e < m ? e : m);
