// const path = require("path");
// console.log(path.basename(__filename));
// console.log(path.parse(__filename));

const os = require("os");
console.log(os.cpus());

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello World from Node.js");

