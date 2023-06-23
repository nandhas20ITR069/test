const express = require("express")
const app = express();
require('./config/db')()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



const UserModel = require('./models/user')

app.post("/register", (req, res) => {
    // console.log(req.body)
    const { username, password, repassword, mobile, email } = req.body;
            const user = new UserModel({
                username,
                password,
                repassword,
                mobile,
                email,
               
            })
            user.save();
            res.send({ message: "Successfull Registered" });
     
    })



app.post("/login", async (req, res) => {
    const {username,password} = req.body;
    await UserModel.findOne({username}).then( user =>{
        if(!user){
            return res.json({err:"username is not found"})
        }
        else{
            res.json({message:"logged in successfully"})
        }
    })
})





app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})