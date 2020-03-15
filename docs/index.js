class Docs {
    constructor () {
        this.data = require("./index.json");
        document.write(/*html*/`<h1>Hello World! Joe is cute!</h1>`);
    }
}

new Docs();