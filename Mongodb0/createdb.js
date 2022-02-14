var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Thor', address: 'pqr 98'},
    { name: 'Hulk', address: 'abc 76'},
    { name: 'Tony', address: 'xyz 65'},
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of customers: " + res.insertedCount);
    db.close();
  });
});
