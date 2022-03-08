var buffer1 = new Buffer('HEllo ');
var buffer2 = new Buffer('WORLD');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());