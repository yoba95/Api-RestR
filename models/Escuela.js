import mongoose from "mongoose";
const { Schema, model} = mongoose;

const escuelaSchema = new Schema({
    claveDeTrabajo:{
        type: 'String',
        required: true,
        //trim para quitar espacios
        trim:true,
        unique: true
    },
    nombreEscuela: String,
    nivelEducativo: String,
    telefono:String,
    creacion: {
        type: 'Date',
        default: Date.now
    }
})

export const Escuela = model ("escuela", escuelaSchema);