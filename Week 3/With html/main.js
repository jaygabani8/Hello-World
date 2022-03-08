const express = require('express');
const bodyParser =require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
})
app.post('/', function (req, res) {
    res = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
     };
     console.log(res);
     res.end(JSON.stringify(res));
  })
 app.listen(3000, function () {
  
   console.log("Server started on port 3000")
})