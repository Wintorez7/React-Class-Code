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

const userdataSchema = new mongoose.Schema({
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


// model-1
let userModel = mongoose.model("users",userSchema)
// model-2
let userDataModel = mongoose.model("userdata",userdataSchema)

// creating document API from new {userDataModel}
app.post("/newStudentuser",async(req,res) => {
    try {
        let {name , age } = req.body
        let userData = new userDataModel({firstName:name, age:age})
        let response = await userData.save()
        return res.status(200).send(response)
    } catch (error) {
        res.status(500).send({error:"something went wrong" , message:error.message})
    }
})



// create document API
app.post("/newuser", async(req,res) => {
    try {
        let { name , age } = req.body
        // console.log(user)
        let userData = new userModel({firstName:name , age:age})
        let response = await userData.save()
        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({error:"something went wrong" , message:error.message})
    }
})

app.get("/getuser",async (req,res) => {
    try{
        const {username} = req.body
        const response = await userModel.findOne({username})
        return res.status(200).send(response)
    }catch(error){
        res.status(500).send({error:"something went Wrong"})
    }
})
    
app.delete("/deleteuser", async(req,res) => {
    try {
        const {username} = req.body
        const response = await userModel.deleteOne({username})
        return res.status(200).send(response)
    } catch (error) {
        res.status(500).send({error:"something went wrong",message:error.message})
    }
})

app.put("/updateuser/:username", async(req,res) => {
    try {
      const {username} = req.params
      let data = req.body
      const response = await userModel.updateOne({username},{$set:{...data}})
      return res.status(200).send(response)  
    } catch (error) {
        res.status(500).send({error:"something went wrong",message:error.message})
    }
})


app.listen(3000,"127.0.0.1",() => {
    console.log("Server running at PORT 3000")
})
