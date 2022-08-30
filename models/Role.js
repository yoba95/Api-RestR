import mongoose from "mongoose";
const { Schema, model} = mongoose;

export const ROLES = ["user", "admin"]

const roleSchema = new Schema({
    name: String,  
}
,{
    versionKey: false,
    timestamps:true
})
//export default model("Role", roleSchema);
export const Role = model("role", roleSchema);