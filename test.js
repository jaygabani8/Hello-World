const http = require('http');
const server= http.createServer(function(req,res){
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(req.url);
          res.end();
  });
  server.listen(3000);
  console.log("Server starterd on port 3000.");
