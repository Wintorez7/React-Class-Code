import userModel from "../model/userModel.js"

export const adduser = async(req,res) => {
    try {
        let data = req.body
        const userdata = new userModel(data)
        let result = await userdata.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send({error:"something went wrong", msg:error.message})
    }
} 

export const getuser = async(req,res) => {
    try{
        const {username} = req.body
        const response = await userModel.findOne({username})
        if(response){
            res.status(200).send(response)
        }else{
            
        }
    }catch(error){
        res.status(500).send({error:"something went Wrong"})
    }
}
