let express=require("express")
let app=express()
let mysql=require("mysql")

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
app.listen(8000)