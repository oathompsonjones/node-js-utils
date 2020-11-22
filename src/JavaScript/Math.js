"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../");
Math.randomInt = (a, b) => {
    if (b === undefined) {
        b = a;
        a = 0;
    }
    ;
    return Math.floor(Math.random() * (b - a + 1) + a);
};
