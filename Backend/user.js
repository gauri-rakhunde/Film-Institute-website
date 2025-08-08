var mongoose=require("mongoose");


let userSchema=new mongoose.Schema({
     name: String,
      Contact: Number,
      Email: String,
      State: String,
      City: String,
      Programme:String
})

let user=mongoose.model("user",userSchema,"user");

module.exports=user;