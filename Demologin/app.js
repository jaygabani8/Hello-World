const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require('http');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('connected', function() {
    console.log('database is connected successfully');
});
db.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
db.on('error', console.error.bind(console, 'connection error:'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String,
    phone:Number,
});
 const comments = mongoose.model('book',userSchema)

app.get('/',function(req,res){
    res.render('home')
})
app.post('/',function(req,res){
    var logininfo ={
     email :  req.body.email,
     pass :  req.body.password
    };
    var customerid = new comments(logininfo);
    detalis.save(function(err){
     if (err){
         console.log('error occured');
     }else{
         console.log('done!');
     }
    });
})
app.get('/signup',function(req,res){
    res.render('signup');
})
app.post('/signup', function(req,res){
 var info = {
     name:  req.body.name,
     email: req.body.email,
     pass: req.body.password,
     phone: req.body.phone
   };
   var detalis = new comments(info);
   detalis.save(function(err){
    if (err){
        console.log('error occured');
    }else{
        console.log('done!');
    }
});
});
app.get('/login',function(req,res){
res.render('login')
})


app.listen(3000,function(){
    console.log("server is running on port 3000")
});