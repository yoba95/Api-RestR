import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schoolSchema = new Schema({
    claveDeTrabajo:{
        type: "String",
        required: true,
        trim:true,
        unique: true
    },
    nombreEscuela: {
     typre: "String",
     required: true   
    },
    nivelEducativo: {
        type: "String",
        required: true
    },
    claveInegi: {
        type:"String",
        required:true
    },
    email:{
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    telefono:String,
    region:{
        type: Schema.Types.ObjectId,
        ref: "role"
    },
    creacion: {
        type: 'Date',
        default: Date.now
    }
})

export const School = model("school", schoolSchema);
