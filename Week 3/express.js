const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/Contact', function (req, res) {
   res.send('Contact me at:-jaygabani@yahoo.in');
})

 app.listen(3000, function () {
  
   console.log("Server started on port 3000")
})