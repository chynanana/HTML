var mysql=require('mysql');
let express=require("express")
let app=express()

 

function showRecords(Request,Response){
    var con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"root",
          database:"qaconsulting"
        });

 

    con.connect();
    con.query("Select * from movies",function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            Response.writeHead(200,{'Content-Type':'text/HTML'});
            Response.write("<Table border='1'>")
            Response.write("<tr>")
            Response.write(" <td> Title </td>")
            Response.write(" <td> Review </td>")
            Response.write(" <td> Chyrate </td>")
            Response.write("</tr>")
            
            result.forEach(function(record){
                Response.write("<tr>")
                Response.write("<td> "+ record.title +"</td>");
                Response.write("<td> "+record.Review + "</td>");
                Response.write(`<td> <A href='http://localhost:8000/movieinfo/${record.title}/${record.review}'> movie info </A>`)
                Response.write(`, <A href='http://localhost:8000/rating/${record.Chyrate}'> Chyrate </A>`)

 

                Response.write("</tr>")

 

        })
        Response.end();
    }
    });
}

 

let examsinformation=function(){

 

}

 

let personalinformation=function(req,response){
    
        let regno=req.params.title
        let name=req.params.review

 

        var con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"root",
          database:"chyrate"
        });

 

    con.connect();
    con.query(`Select * from movies where title=${title}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking informaton about : ${title}`)
            result.forEach(function(record){
                response.write(`<br> Title ${record.title} </br>`);
                response.write(`Review: ${record.review} </br>`);
                response.write(`Chyrate record.chyrate </br>`);
        response.end();
    }
    });
}

 

app.get("/dbf",function(req,res){
    showRecords(req,res)
    

 


})

 

app.get("/personinfo/:title/:review",function(req,res){
    personalinformation(req,res);

 

})
app.get("/examdetails/:title",function(req,res){
    console.log(" Information on  " + req.params.title)
})

 

app.listen(8000)