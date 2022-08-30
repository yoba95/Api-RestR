import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schoolSchema = new Schema({
    claveDeTrabajo:{
        type: 'String',
        required: true,
        //trim para quitar espacios
        trim:true,
        unique: true
    },
    personal: {
        type: Schema.Types.ObjectId,
        ref: "Personal",
        required: true
    },
    region:{
        type: Schema.Types.ObjectId,
        ref:"Region",
        required:true
    },
    ubicacion:{
        type: Schema.Types.ObjectId,
        ref:"Ubicacion",
        required:true
    },
    estatus:{
        type: Schema.Types.ObjectId,
        ref:"Estatus",
        required:true
    },
    director:{
        type: Schema.Types.ObjectId,
        ref:"Director",
        required:true
    },
    nombreEscuela: String,
    nivelEducativo: String,
    email:{
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    telefono:String,
    creacion: {
        type: 'Date',
        default: Date.now
    }
})

export const School = model("school", schoolSchema);
