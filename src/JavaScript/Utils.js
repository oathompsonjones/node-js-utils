"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTime = void 0;
function parseTime(str) {
    const regExp = {
        year: /(\d+)y((ea)?r)?/ig,
        month: /(\d+)mo(nth)?/ig,
        week: /(\d+)w((ee)?k)?/ig,
        day: /(\d+)d(ay)?/ig,
        hour: /(\d+)h((ou)?r)?/ig,
        minute: /(\d+)m(in(ute)?)?/ig,
        second: /(\d+)s(ec(ond)?)?/ig,
        millisecond: /(\d+)m(illisecond|s)/ig
    };
    const values = {
        year: 365.25 * 24 * 60 * 60 * 1e3,
        month: 365.25 / 12 * 24 * 60 * 60 * 1e3,
        week: 7 * 24 * 60 * 60 * 1e3,
        day: 24 * 60 * 60 * 1e3,
        hour: 60 * 60 * 1e3,
        minute: 60 * 1e3,
        second: 1e3,
        millisecond: 1
    };
    const times = str.replace(/\s/g, "").split(",");
    if (!times.some((time) => time.match(regExp.year) !== null
        || time.match(regExp.month) !== null
        || time.match(regExp.week) !== null
        || time.match(regExp.day) !== null
        || time.match(regExp.hour) !== null
        || time.match(regExp.minute) !== null
        || time.match(regExp.second) !== null
        || time.match(regExp.millisecond) !== null))
        return null;
    let ms = 0;
    times.forEach((time) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (time.match(regExp.millisecond) !== null)
            ms += values.millisecond * parseInt((_b = (_a = time.match(regExp.millisecond)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "0");
        else if (time.match(regExp.month) !== null)
            ms += values.month * parseInt((_d = (_c = time.match(regExp.month)) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : "0");
        else if (time.match(regExp.minute) !== null)
            ms += values.minute * parseInt((_f = (_e = time.match(regExp.minute)) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : "0");
        else if (time.match(regExp.second) !== null)
            ms += values.second * parseInt((_h = (_g = time.match(regExp.second)) === null || _g === void 0 ? void 0 : _g[0]) !== null && _h !== void 0 ? _h : "0");
        else if (time.match(regExp.hour) !== null)
            ms += values.hour * parseInt((_k = (_j = time.match(regExp.hour)) === null || _j === void 0 ? void 0 : _j[0]) !== null && _k !== void 0 ? _k : "0");
        else if (time.match(regExp.day) !== null)
            ms += values.day * parseInt((_m = (_l = time.match(regExp.day)) === null || _l === void 0 ? void 0 : _l[0]) !== null && _m !== void 0 ? _m : "0");
        else if (time.match(regExp.week) !== null)
            ms += values.week * parseInt((_p = (_o = time.match(regExp.week)) === null || _o === void 0 ? void 0 : _o[0]) !== null && _p !== void 0 ? _p : "0");
        else if (time.match(regExp.year) !== null)
            ms += values.year * parseInt((_r = (_q = time.match(regExp.year)) === null || _q === void 0 ? void 0 : _q[0]) !== null && _r !== void 0 ? _r : "0");
    });
    return ms;
}
exports.parseTime = parseTime;
