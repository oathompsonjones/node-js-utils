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