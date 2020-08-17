let express=require("express")
let app=express()
app.get("/message/:name",function(req,res){
	R.write(" Hello"+req.params.name)
	R.end();
})
app.get("/msg/:n/:a",function(req,res){
	res.write(req.params.n+ "Lives In "+ req.params.a)
	res.end();
})
app.listen(8000)