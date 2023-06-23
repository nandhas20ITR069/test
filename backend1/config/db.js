const mongoose = require('mongoose')

const connectDb= async()=>{
    try{
        const db='mongodb://localhost:27017/loginMern'
       await  mongoose.connect(db);
       console.log("db connected successfully")
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}
module.exports=connectDb