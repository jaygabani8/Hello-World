var fs = require("fs");
var filedata = fs.readFileSync('index.txt');
console.log(filedata.toString());
console.log("End of Program execution");