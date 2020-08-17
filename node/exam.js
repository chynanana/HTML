var mysql=require('mysql');
let express=require("express")
let app=express()

 

function showallrecords(){
	let con=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"root",
		database:"chyrate"
	});
	
	con.connect();
	con.query("select * from movies", function(error,results){
		if(error){
			console.log("something went wrong" + error)
		}else{
			results.forEach(function(record){
				console.log(record.chyrate+"..."+record.image+"..."+record.release_date+"..."+record.review+"..."+record.title)
			})
		}
	})
}
app.get("/showrecords",function(req,res){
	showallrecords()
})
app.listen(8001)

 

let movieinformation=function(){

 

}

 

let personalinformation=function(req,response){
    
        let regno=req.params.regno
        let name=req.params.name

 

        var con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"",
          database:"qaconsulting"
        });

 

    con.connect();
    con.query(`SELECT*FROM movies WHERE title="get out";`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You would like to read the review for ${title}`)
            result.forEach(function(record){
                response.write(`<br> Title ${record.title} </br>`);
                response.write(`Review: ${record.review} </br>`);
                response.write(`Chyrate record.chyrate </br>`);
        })
        response.end();
    }
    });
}

 

app.get("/dbf",function(req,res){
    showRecords(req,res)
    

 


})

 

app.get("/movie/:regno/:name",function(req,res){
    personalinformation(req,res);

 

})
app.get("/moviedetails/:regno",function(req,res){
    console.log(" asking for exam details " + req.params.regno)
})

 

//app.listen(8001)
//app.listen(8001)