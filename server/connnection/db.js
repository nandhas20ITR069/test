const mongoose = require('mongoose')

const connectDb =  async()=>{
    try{
        const db = process.env.MONGO_URI;
        await mongoose.connect(db);
        console.log(" db connected successfully");   
     }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports= connectDb