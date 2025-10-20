// const path = require("path");
// console.log(path.basename(__filename));
// console.log(path.parse(__filename));

// const os = require("os");
// console.log(os.cpus());

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello World from Node.js");
fs.appendFileSync("hello.txt", "\nHello Adeola Isaiah.");
const content = fs.readFileSync("hello.txt", "utf-8");
console.log(content);

const http = require("http");
// const server = http.createServer((req, res) => {

  const math = require("./math_helper");
  const answer= math.calculateSquare(345);
  console.log("The square of 5 is: " + answer);

  const areaCircle = math.areasOfCircle(10);
  console.log(`The area of a circle with radius 10 is: ${areaCircle}`);
// });