# node-js-utils
A collection of useful functions for node.js.

## Examples

### Stopwatch

#### JavaScript
```js
const { Stopwatch } = require("node-js-utils");

const watch = new Stopwatch();

console.log(watch.elapsedMilliseconds);
// Output: 0
console.log(watch.elapsedSeconds);
// Output: 0
console.log(watch.elapsedMinutes);
// Output: 0
console.log(watch.elapsedHours);
// Output: 0
console.log(watch.time);
// Output: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
console.log(watch.toString());
// Output: 0:0:0.0

watch.start();
setTimeout(() => {
    console.log(watch.elapsedMilliseconds);
    // Output: 1000
    console.log(watch.elapsedSeconds);
    // Output: 1
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 1, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:1.0

    watch.stop();

    console.log(watch.elapsedMilliseconds);
    // Output: 1000
    console.log(watch.elapsedSeconds);
    // Output: 1
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 1, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:1.0

    watch.reset();

    console.log(watch.elapsedMilliseconds);
    // Output: 0
    console.log(watch.elapsedSeconds);
    // Output: 0
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:0.0
}, 1000);
```

#### TypeScript
```ts
import { Stopwatch } from "node-js-utils";

const watch: Stopwatch = new Stopwatch();

console.log(watch.elapsedMilliseconds);
// Output: 0
console.log(watch.elapsedSeconds);
// Output: 0
console.log(watch.elapsedMinutes);
// Output: 0
console.log(watch.elapsedHours);
// Output: 0
console.log(watch.time);
// Output: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
console.log(watch.toString());
// Output: 0:0:0.0

watch.start();
setTimeout(() => {
    console.log(watch.elapsedMilliseconds);
    // Output: 1000
    console.log(watch.elapsedSeconds);
    // Output: 1
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 1, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:1.0

    watch.stop();

    console.log(watch.elapsedMilliseconds);
    // Output: 1000
    console.log(watch.elapsedSeconds);
    // Output: 1
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 1, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:1.0

    watch.reset();

    console.log(watch.elapsedMilliseconds);
    // Output: 0
    console.log(watch.elapsedSeconds);
    // Output: 0
    console.log(watch.elapsedMinutes);
    // Output: 0
    console.log(watch.elapsedHours);
    // Output: 0
    console.log(watch.time);
    // Output: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
    console.log(watch.toString());
    // Output: 0:0:0.0
}, 1000);
```

### Random

#### JavaScript
```js
const { Random } = require("node-js-utils");

const rand = new Random();

console.log(rand.float());
// Output: Random floating point number between 0 and 1
//          e.g. 0.16717168179446684
console.log(rand.integer(1, 10));
// Output: Random integer between 1 and 10
//          e.g. 6
console.log(rand.string(10));
// Output: Random string with 10 characters
//          e.g. nH97IPTqFN
```

#### TypeScript
```ts
import { Random } from "node-js-utils";

const rand: Random = new Random();

console.log(rand.float());
// Output: Random floating point number between 0 and 1
//          e.g. 0.16717168179446684
console.log(rand.integer(1, 10));
// Output: Random integer between 1 and 10
//          e.g. 6
console.log(rand.string(10));
// Output: Random string with 10 characters
//          e.g. nH97IPTqFN
```

### Array

#### JavaScript
```js
require("node-js-utils");

const arr = [ "apple", "bag", "cat", "dog", "egg", "apple", "bag" ];

console.log(arr.filterByCount(1));
// Output: [ 'cat', 'dog', 'egg' ]
console.log(arr.getModes());
// Output: [ 'apple', 'bag' ]
console.log(arr.getCount("bag"));
// Output: 2
console.log(arr.removeDuplicates());
// Output: [ 'apple', 'bag', 'cat', 'dog', 'egg' ]
console.log(arr.toListString());
// Output: apple, bag, cat, dog, egg, apple and bag.
```

#### TypeScript
```ts
import "node-js-utils";

const arr: string[] = [ "apple", "bag", "cat", "dog", "egg", "apple", "bag" ];

console.log(arr.filterByCount(1));
// Output: [ 'cat', 'dog', 'egg' ]
console.log(arr.getModes());
// Output: [ 'apple', 'bag' ]
console.log(arr.getCount("bag"));
// Output: 2
console.log(arr.removeDuplicates());
// Output: [ 'apple', 'bag', 'cat', 'dog', 'egg' ]
console.log(arr.toListString());
// Output: apple, bag, cat, dog, egg, apple and bag.
```

### Date

#### JavaScript
```js
require("node-js-utils");

// Numbers taken from thee result of Date.now() at two different times
const date = new Date(1574458061847);
const _date = new Date(1574458125870 - 1574458061847);

console.log(_date.toUptimeString());
// Output: 1m, 4s, 23ms
console.log(date.getTimes());
// Output: { day: 'Friday', date: '22', month: '11', year: '2019', hours: '21', minutes: '27', seconds: '41', milliseconds: '847' }
```

#### TypeScript
```ts
import "node-js-utils";

// Numbers taken from thee result of Date.now() at two different times
const date: Date = new Date(1574458061847);
const _date: Date = new Date(1574458125870 - 1574458061847);

console.log(_date.toUptimeString());
// Output: 1m, 4s, 23ms
console.log(date.getTimes());
// Output: { day: 'Friday', date: '22', month: '11', year: '2019', hours: '21', minutes: '27', seconds: '41', milliseconds: '847' }
```

### String

#### JavaScript
```js
require("node-js-utils");

const str = "hello world";

console.log(str.toProperCase());
// Output: Hello world
console.log(str.toTitleCase());
// Output: Hello World
console.log(str.toArray(1));
// Output: [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(str.removeLastIndexOf("o"));
// Output: hello wrld
```

#### TypeScript
``` ts
import "node-js-utils";

const str: string = "hello world";

console.log(str.toProperCase());
// Output: Hello world
console.log(str.toTitleCase());
// Output: Hello World
console.log(str.toArray(1));
// Output: [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(str.removeLastIndexOf("o"));
// Output: hello wrld
```