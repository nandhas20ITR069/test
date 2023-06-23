
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    repassword:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
   
   

})
const UserModel = new mongoose.model("UserModel", userSchema)
module.exports=UserModel