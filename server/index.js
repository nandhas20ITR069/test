const express = require('express')
const app= express();
const cors = require('cors')
require('dotenv').config()
require('./connnection/db')();
const routes = require('./routes/routes')

app.use(cors());
app.use(express.json())

app.use('/lists',routes);


app.use('/',(req,res)=>{
    res.send("hello");
})
app.listen(4000,()=>{
    console.log("lisenting on the port 4000")
})