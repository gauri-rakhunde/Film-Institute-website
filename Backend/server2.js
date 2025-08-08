var express = require("express")
var dbConfig = require("./dbConfig")
var cors=require("cors")
var user = require("./user")
let app=express()
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>
{ let data = await user.find();
    res.send(data);
})


app.post("/",async(req,res)=>{
    let data=await user(req.body)
    let result=await data.save()
    res.send(result);
})
app.listen(4900,()=>{
    console.log("Server is Running")
});