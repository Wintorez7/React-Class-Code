import express from 'express'
import connectDb from "./db/db.config.js"
import { userRouter } from './Routes/userRouter.js'

const app = express()

// database Connection

app.use(express.json())

// model-1
// let userModel = mongoose.model("users",userSchema)
// model-2
// let userDataModel = mongoose.model("userdata",userdataSchema)

// creating document API from new {userDataModel}
// app.post("/newStudentuser",async(req,res) => {
//     try {
//         let {name , age } = req.body
//         let userData = new userDataModel({firstName:name, age:age})
//         let response = await userData.save()
//         return res.status(200).send(response)
//     } catch (error) {
//         res.status(500).send({error:"something went wrong" , message:error.message})
//     }
// })

// api
app.get("/", (req,res) => res.send("server is working"))

// routes
app.use("/user",userRouter)

// create document API
// app.post("/newuser", async(req,res) => {
//     try {
//         let { name , age } = req.body
//         // console.log(user)
//         let userData = new userModel({firstName:name , age:age})
//         let response = await userData.save()
//         return res.status(201).send(response)
//     } catch (error) {
//         return res.status(500).send({error:"something went wrong" , message:error.message})
//     }
// })

app.get("/getuser",userRouter)
    
// app.delete("/deleteuser", async(req,res) => {
//     try {
//         const {username} = req.body
//         const response = await userModel.deleteOne({username})
//         return res.status(200).send(response)
//     } catch (error) {
//         res.status(500).send({error:"something went wrong",message:error.message})
//     }
// })

// app.put("/updateuser/:username", async(req,res) => {
//     try {
//       const {username} = req.params
//       let data = req.body
//       const response = await userModel.updateOne({username},{$set:{...data}})
//       return res.status(200).send(response)  
//     } catch (error) {
//         res.status(500).send({error:"something went wrong",message:error.message})
//     }
// })


app.listen(3000,"127.0.0.1",() => {
    console.log("Server running at PORT 3000")
    connectDb() 
})
