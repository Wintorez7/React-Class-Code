import express from 'express'
import mongoose from 'mongoose'

const app = express()

// database Connection
let Dburl = "mongodb://127.0.0.1:27017/myServer"
mongoose.connect(Dburl)
    .then((res) => console.log("Databse connected"))
    .catch((error) => console.log("Database connection Error",error.message)) 

app.use(express.json())


// schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true

    },
    lastName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    address:{
        city:String,
        zip:Number
    },
})

// model
let userModel = mongoose.model("users",userSchema)

// createDocument
// async function insertData(user) {
//     let userData = new userModel(user)
//     let response = await userData.save()
//     console.log(response)
// }

// let salmanKhan = {firstName:"Salman" , usename:"Salman Bhoi", password:"654321",age:60}
// insertData(salmanKhan)
 
// create document API
app.post("/newuser", async(req,res) => {
    try {
        let user = req.body
        let userData = new userModel(user)
        let response = await userData.save()
        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({error:"something went wrong" , message:error.message})
    }
})
    
app.listen(3000,"127.0.0.1",() => {
    console.log("Server running at PORT 3000")
})
