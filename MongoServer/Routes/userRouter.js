import express from 'express'
import { adduser, getuser } from '../controller/userController.js';



export const userRouter = express.Router()

userRouter.get("/",(req,res) => res.send("user Router is Working"))

userRouter.post("/add", adduser)

userRouter.post("/add", getuser)

 