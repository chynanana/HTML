import express

let express=require("express")
let app=express()
let reply=function(R){
	R.write(" Hello")
	R.write(" and")
	R.write(" goodbye")
	R.end()
}
app.get(["/one","/two","/three"],function(req,response){
	reply(response);
})
app.listen(8000)