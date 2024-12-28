import mongoose from "mongoose";

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



export default mongoose.model("users",userSchema)