/*
    npm install cookie-parser
    npm install express-session
*/
var express=require("express");
var cookieparser=require("cookie-parser");
var session = require('express-session'); 
var app=express();
app.use(cookieparser());
app.use(session({secret: "Shh, its a secret!"}));
app.get("/",function(req,res){
    console.log("abc");
    req.session.user="shafeeq"
    req.session.pass="abc"
    res.send("Session created")
})
app.get("/show",function(req,res){
    //var session=req.session
    res.send("username: "+req.session.user)
})
app.get("/show2",function(req,res){
    //var session=req.session
    res.send("username: "+req.session.user)
})
app.get("/show3",function(req,res){
    //var session=req.session
    res.send("username: "+req.session.user)
})

app.listen(8000);