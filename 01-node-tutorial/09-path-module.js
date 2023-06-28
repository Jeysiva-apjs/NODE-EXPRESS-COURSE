//To interact with file path easily.
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//absolute path will be useful when hosting an application
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
