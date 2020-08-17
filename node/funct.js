let express=require("express")
let app=express()

let F1=function(req,res,next){
	let n=req.params.num
	console.log("A2")
	if(n==2){
		next()
	}
}

let F2=function(req,res,next){
	console.log("A3")
	next()
}
let F3=function(req,res){
	console.log("A4")
}

app.get("/second/:num",[F1,F2,F3])

app.listen(8000)