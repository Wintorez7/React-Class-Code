import mongoose from "mongoose";

function connectDb() {
    let Dburl = "mongodb://127.0.0.1:27017/myServer"
    mongoose.connect(Dburl)
        .then((res) => console.log("Databse connected"))
        .catch((error) => console.log("Database connection Error",error.message)) 
}

export default connectDb;