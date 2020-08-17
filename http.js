var http=require("http")
var URL=require("url")
let requestprocessing=function(request,response){
    let myurl=URL.parse(request.url,true)
    if( myurl.pathname=="/"){
        response.writeHead(200, {'Content-Type': 'text/html'});
            response.write("<h2> Select Times table <h2>");
        for(let a=1;a<=10;a++){
            
            response.write("<A href='http://localhost:4000/timestable?t="+a+"'>"+a+"</A>")    
            response.write("<br>")    
        }
        response.end()
    }
    if(myurl.pathname=="/timestable"){
        let T=myurl.query.t;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("<A href='http://localhost:4000'> Home </A>")
        response.write("<b> Your Times Tabel is " +T +"</B>")
        response.write("<table border='2'>");
            for(let i=1;i<=10;i++){
                response.write("<tr>");
                response.write("<td>");
                response.write(T + " x " + i + "="+(T*i))
                response.write("</td>");
                response.write("</tr>");
            }
    
        response.write("</table>");

 

        response.end();
    }
}
let server=http.createServer(requestprocessing);
server.listen(4000);