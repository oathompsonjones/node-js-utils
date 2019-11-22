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

watch.start();
setTimeout(() => {
    console.log(watch.elapsedMilliseconds);
    // Output: 1000

    watch.stop();

    console.log(watch.elapsedMilliseconds);
    // Output: 1000

    watch.reset();

    console.log(watch.elapsedMilliseconds);
    // Output: 0
}, 1000);
```

#### TypeScript
```ts
import { Stopwatch } from "node-js-utils";

const watch: Stopwatch = new Stopwatch();

console.log(watch.elapsedMilliseconds);
// Output: 0

watch.start();
setTimeout(() => {
    console.log(watch.elapsedMilliseconds);
    // Output: 1000

    watch.stop();

    console.log(watch.elapsedMilliseconds);
    // Output: 1000

    watch.reset();

    console.log(watch.elapsedMilliseconds);
    // Output: 0
}, 1000);
```