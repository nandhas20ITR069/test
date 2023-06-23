const mongoose = require('mongoose')

const listSchema =  new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    }
})

const listmodel = mongoose.model('list',listSchema);

module.exports=listmodel