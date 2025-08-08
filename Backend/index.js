var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    fs.readFile("",function(error,data){
        res.write(data);
        res.end();
    })
}

).listen(4000,()=>{
    console.log("Server is running")
})