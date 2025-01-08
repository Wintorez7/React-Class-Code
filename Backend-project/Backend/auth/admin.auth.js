import Admin from "../model/admin.model.js";
import {generateOTP} from '../utils/otp.js'
import {generateToken} from '../utils/jwt.js'

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).send({ error: "Provide all required fields" });
        }

        // Find the admin by email
        let isAdmin = await Admin.findOne({ email });

        if (isAdmin) {
            // Compare the password directly
            if (isAdmin.password === password) {
                // If password matches, proceed (add further login logic if needed)
                return res.status(200).send({ message: "Login successful" });
            } else {
                return res.status(401).send({ error: "Password is not matching" });
            }
        } else {
            return res.status(400).send({ error: "Email address not matched" });
        }
    } catch (error) {
        // Handle any unexpected errors
        return res.status(500).send({ error: "Internal Server Error" });
    }
};


export const forgetPassword = async(req,res) => {
    try {
        const {email} = req.body
        if(!email) return res.status(400).send({error:"Provid the email address"})
        const isAdmin = await Admin.findOne({email})
        if(isAdmin){
            // generate the otp
            let otp = generateOTP()
            // send the otp in user email

            // save otp in database
        }else{
            res.status(400).send({error:"Admin email not Found"})
        }
    } catch (error) {
        res.status(500).send({error:"Something went wrong", msg: error.message})
    }
}