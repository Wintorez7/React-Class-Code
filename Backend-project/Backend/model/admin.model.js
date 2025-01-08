import { model } from "mongoose";
import adminSchema from "../schema/admin.schema.js";


const Admin = model("Admin", adminSchema)

export default Admin;