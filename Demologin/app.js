const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");;
const path = require('path');
const app = express();
const alert = require("alert");

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
    email: String,
    phone: Number,
});
 const User = mongoose.model('book',userSchema)

app.get('/',function(req,res){
    res.render('home')
})
app.post('/',function(req,res){
    var logininfo ={
     email :  req.body.email,
     password :  req.body.password
     
    };
   /* console.log("logininfo",logininfo); */

  
   User.find({ email:req.body.email,
    password:req.body.password}, function (err, User) {
        if(err || User.length == 0){
        console.log("Incorrect password and email");
       alert("Incorrect password and email");
    }
    else{
        console.log("successfully logged in ", User);
        res.redirect('/login');
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
     password: req.body.password,
     phone: req.body.phone
   };
   var details = new User(info);
   details.save(function(err){
    if (err){
        console.log('error occured');
    }else{
        console.log(info);
    }
});
res.redirect('/signup');
});



app.get('/login',function(req,res){
res.render('login')
})


app.listen(3000,function(){
    console.log("server is running on port 3000")
});