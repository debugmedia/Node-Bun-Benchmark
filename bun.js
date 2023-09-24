const fs = require("fs");

const fileName = "testFile1.txt";
const fileValue = "Hello world";

console.log("Bun");
const writeStart = performance.now();
fs.writeFileSync(fileName, fileValue.repeat(20_000_000));
// await Bun.write(fileName, fileValue.repeat(20_000_000));
const writeEnd = performance.now();
console.log(`Write Took: ${writeEnd - writeStart}ms`);

const readStart = performance.now();
await Bun.file(fileName).text();
const readEnd = performance.now();
console.log(`Read Took: ${readEnd - readStart}ms`);
