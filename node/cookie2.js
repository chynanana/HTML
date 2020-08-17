let express = require("express");
let app = express()
var cookieparser=require("cookie-parser");
//var cookieparse=require("cookie-parser");

 

app.use(cookieparser());

 

app.get("/", function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    for (let i=1; i <=10;i++) {
        res.write(`<a href="http://localhost:8030/range/${i}"> ${i}</a><br>`)
        
    }
    res.end()
})
 
app.get("/range/:t",function(req,res) {
    res.cookie("timestable",req.params.t)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h2>Choose your desired range</h2>")
    let T=req.params.t
    console.log(T);
    for (let a=10; a<=100;a+=10) {
        res.write(`<a href=http://localhost:8030/timestable/${a}>${a}</a>`)
        res.write(`<br>`)
    }
    res.end()
    
})
app.get("/timestable/:r",function(req,res) {
    let number=req.cookies.timestable    
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<a href=http://localhost:8030>Home</a>`)
    res.write("<h5>Your times table is:</h5>")
    //let number = parseInt(req.params.t)
    let max=parseInt(req.params.r)
    console.log(max);
    res.write("<table border='2'>")
 
    for (let x=1; x<=max; x++) {
        res.write("<tr>")
        res.write(`<td>${x} x ${number} = </td><td>`)
        res.write(`${number*x}`)
        res.write("</td>")
        res.write("</tr>")
    }
    res.write("</table>")
    res.end()
})
 
app.listen(8030)