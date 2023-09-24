const fs = require("fs");

const fileName = "testFile.txt";
const fileValue = "Hello world";

console.log("Node");
const writeStart = performance.now();
fs.writeFileSync(fileName, fileValue.repeat(20_000_000));
const writeEnd = performance.now();
console.log(`Write Took: ${writeEnd - writeStart}ms`);

const readStart = performance.now();
fs.readFileSync(fileName, "utf-8");
const readEnd = performance.now();
console.log(`Read Took: ${readEnd - readStart}ms`);
