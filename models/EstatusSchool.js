import mongoose from "mongoose";
const { Schema, model} = mongoose;

export const Estatus = ["activo", "inactivo"]

const estatuSchema = new Schema({
    name: String,  
}
,{
    versionKey: false,
    timestamps:true
})
//export default model("Role", roleSchema);
export const Estatu = model("estatu", estatuSchema);