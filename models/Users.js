const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  familyName: {type:String,required:true},
  surname: {type:String,required:true},
  gender: {type:String,required:true},
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true},
  gender: {type:String,required:true},
  createdAt : {type:Date,default:Date.now}
});

module.exports = mongoose.model("Users", userSchema);