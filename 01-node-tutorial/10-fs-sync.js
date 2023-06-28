//fs - file system
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//if the file is not there, it will create a new file and write the data
//if the file is already there, it will over write the contents
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

//if you want to uppend data to a file use flag
writeFileSync("./content/result-sync.txt", `uppended data`, { flag: "a" });
console.log("done with this task");
console.log("starting the next one");
