const mongoose=require('mongoose')
const userSchema =new mongoose.Schema({
  name:String,
  mail:String,
  pass:String
});

const userModel=mongoose.model("userData",userSchema)
module.exports=userModel;