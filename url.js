const http = require('http');
const url = require('url');
const adr = 'http://localhost:3000/default.htm?year=2022&month=february';
http.createServer(function (req, res) {
  var q = url.parse(adr, true).host;
    console.log(q);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Feel free to add query parameters to the end of the url');
  })
  .listen(3000);
  console.log("Server starterd on port 3000.");
