const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).host;
    console.log(queryObject);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Feel free to add query parameters to the end of the url');
  })
  .listen(3000);
    console.log("Server starterd on port 3000.");
