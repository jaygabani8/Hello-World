var fs = require("fs");  
    
fs.readFile('index.txt', function (err, filedata) {  
    if (err) return console.error(err);  
    console.log(filedata.toString());  
}); 
console.log("End of Program execution");  