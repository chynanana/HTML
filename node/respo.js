let mysql=require('mysql');
let express=require("express")
let app=express()

 

let dbconnection= function (){
    let con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"root",
          database:"chyrate"
        });

 

    con.connect();
    return con;
}

 

function showRecords(Request,Response){
    let mycon=dbconnection()
    mycon.query("Select * from movies",function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            Response.writeHead(200,{'Content-Type':'text/HTML'});
            Response.write("<Table border='1'>")
            Response.write("<tr>")
            Response.write(" <td> Registration number </td>")
            Response.write(" <td> name </td>")
            Response.write(" <td> Options </td>")
            Response.write("</tr>")
            
            result.forEach(function(record){
                Response.write("<tr>")
                Response.write("<td> "+ record.regno +"</td>");
                Response.write("<td> "+record.name + "</td>");
                Response.write(`<td> <A href='http://localhost:8000/personinfo/${record.regno}/${record.name}'> personal </A>`)
                Response.write(`, <A href='http://localhost:8000/examdetails/${record.regno}/${record.name}'> exam </A>`)

 

                Response.write("</tr>")

 

        })
        Response.end();
    }
    });
}

 

let examsinformation=function(r,n,response){

 

        let mycon=dbconnection();

 

    mycon.query(`Select * from exams where regno=${r}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking for the Exam results of : ${n}`)
            response.write("<table border='1'")
            response.write("<tr>")
            response.write("<td> S.no </td>")
            response.write("<td> subject  </td>")
            response.write("<td> marks </td>")
            response.write("<td> subkect Percentage </td>")
            response.write("</tr>")
            let sno=1
            let totalmarks=0
            result.forEach(function(record){
                response.write(`<tr>`);
                response.write(`<td> ${sno}</td>`);
                response.write(`<td> ${record.subject}</td>`);
                response.write(`<td> ${record.marks}</td>`);
                response.write(`<td> ${record.marks*100/150}</td>`);
                totalmarks=totalmarks+record.marks
                sno++;
        })
            let percentage=totalmarks*100/450
            response.write("</table>")
            response.write("<br>Total Marks:"+totalmarks)
            response.write(" <br>Percentage:"+percentage)
            if(percentage>=65){
                    response.write(" <font style='color:green'> you have passed teh exam</font>")
            }else{
                    response.write(" <font style='color:red'> you have FAILED the exam </font>")
            }
        response.end();
    }
    });
}

 

let personalinformation=function(req,response){
    
        let mycon=dbconnection();

 

    mycon.query(`Select * from personaldetails where regno=${regno}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking for the presonal details of : ${name}`)
            result.forEach(function(record){
                response.write(`<br> Address ${record.address} </br>`);
                response.write(`Post Code: ${record.postcode} </br>`);
                response.write(`City record.city </br>`);
        })
        response.end();
    }
    });
}

 

 

app.get("/",function(req,res){
    showRecords(req,res)
})

 

app.get("/personinfo/:regno/:name",function(req,res){
    personalinformation(req,res);

 

})
app.get("/examdetails/:r/:n",function(request,response){
    let regno=request.params.r
    let name=request.params.n

 

    examsinformation(regno,name,response)
})

 

app.listen(8000)var mysql=require('mysql');
let express=require("express")
let app=express()

 

let dbconnection= function (){
    let con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"root",
          database:"qaconsulting"
        });

 

    con.connect();
    return con;
}

 

function showRecords(Request,Response){
    let mycon=dbconnection()
    mycon.query("Select * from school",function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            Response.writeHead(200,{'Content-Type':'text/HTML'});
            Response.write("<Table border='1'>")
            Response.write("<tr>")
            Response.write(" <td> Registration number </td>")
            Response.write(" <td> name </td>")
            Response.write(" <td> Options </td>")
            Response.write("</tr>")
            
            result.forEach(function(record){
                Response.write("<tr>")
                Response.write("<td> "+ record.regno +"</td>");
                Response.write("<td> "+record.name + "</td>");
                Response.write(`<td> <A href='http://localhost:8000/personinfo/${record.regno}/${record.name}'> personal </A>`)
                Response.write(`, <A href='http://localhost:8000/examdetails/${record.regno}/${record.name}'> exam </A>`)

 

                Response.write("</tr>")

 

        })
        Response.end();
    }
    });
}

 

let examsinformation=function(r,n,response){

 

        let mycon=dbconnection();

 

    mycon.query(`Select * from exams where regno=${r}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking for the Exam results of : ${n}`)
            response.write("<table border='1'")
            response.write("<tr>")
            response.write("<td> S.no </td>")
            response.write("<td> subject  </td>")
            response.write("<td> marks </td>")
            response.write("<td> subkect Percentage </td>")
            response.write("</tr>")
            let sno=1
            let totalmarks=0
            result.forEach(function(record){
                response.write(`<tr>`);
                response.write(`<td> ${sno}</td>`);
                response.write(`<td> ${record.subject}</td>`);
                response.write(`<td> ${record.marks}</td>`);
                response.write(`<td> ${record.marks*100/150}</td>`);
                totalmarks=totalmarks+record.marks
                sno++;
        })
            let percentage=totalmarks*100/450
            response.write("</table>")
            response.write("<br>Total Marks:"+totalmarks)
            response.write(" <br>Percentage:"+percentage)
            if(percentage>=65){
                    response.write(" <font style='color:green'> you have passed teh exam</font>")
            }else{
                    response.write(" <font style='color:red'> you have FAILED the exam </font>")
            }
        response.end();
    }
    });
}

 

let personalinformation=function(req,response){
    
        let mycon=dbconnection();

 

    mycon.query(`Select * from personaldetails where regno=${regno}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking for the presonal details of : ${name}`)
            result.forEach(function(record){
                response.write(`<br> Address ${record.address} </br>`);
                response.write(`Post Code: ${record.postcode} </br>`);
                response.write(`City record.city </br>`);
        })
        response.end();
    }
    });
}

 

 

app.get("/",function(req,res){
    showRecords(req,res)
})

 

app.get("/personinfo/:regno/:name",function(req,res){
    personalinformation(req,res);

 

})
app.get("/examdetails/:r/:n",function(request,response){
    let regno=request.params.r
    let name=request.params.n

 

    examsinformation(regno,name,response)
})

 

app.listen(8000)