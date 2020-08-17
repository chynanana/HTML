/*
    npm install cookie-parser
*/

 

var express=require("express");
var cookieparser=require("cookie-parser");
//var cookieparse=require("cookie-parser");

 

var app=express();
app.use(cookieparser());
// to create a cookie we donto need the Cookie-praser

 


app.get("/color/:color",function(req,res){
    let color=req.params.color
    res.cookie("color",color);
    res.end("cookies created");
});

 

app.get("/makecookie",function(req,res){
    res.cookie("QA_Cookie1","Express-cookies by shafeeq");
    res.end("cookies created");
});

 

app.get("/readcookie",function(req,res){
    res.write("First Cookie"+req.cookies.QA_Cookie1)
    res.write("<br>")
    res.write("Second Cookie"+req.cookies.QA_CookieTest)

 

    res.end();
});

 

app.get("/info",function(req,res){
    let c=req.cookies.color;
    res.writeHead(200,{'Content-Type':'text/HTML'});
    res.write(` <h2> <font style='color:${c}'> The is QA Consulting <h2> </font>`)
    res.end();
});

 

app.get("/info2",function(req,res){
    let c=req.cookies.color;
    res.writeHead(200,{'Content-Type':'text/HTML'});
    res.write(` <h2> <font style='color:${c}'> Macjhester<h2> </font>`)
    res.end();
});

 


app.get("/removecookie",function(req,res){
    res.clearCookie("QA_Cookie1")
    res.end("cookies removed");
});

 

app.listen(8000);