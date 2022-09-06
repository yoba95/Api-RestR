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
     type: "String",
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
    telefono: String,
    region: {
        claveRegion:{
            type: "String",
            required: true
        },
        name: {
            type: "String",
            required: true
        } 
    },  
    municipio:{
            nombre: {
                type: "String",
                required: true
            },
    },
    localidad:{
            nombre:{
                type: "String",
                required: true
            },
            calle: {
                type: "String",
                required: true
            },
            numExterior: String,
            numInterior: String,
            colonia: String,
            codigoPostal: {
                type: "String",
                required: true
            },
           // coordenadasLatitud: Number,
          //  coordenadasLongitud: Number,
        },
    director:{
        nombre: {
            type: "String",
            required: true
        },
        sindicato: {
            type: "String",
            required: true
        },
        telefono: {
            type: "String",
            required: true
        },
        puesto: {
            type: "String",
            required: true
        },
        email:{
            type: "string",
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            index: { unique: true}
        },
       estatus: String,
       /*
        estatus:[{
            type: Schema.Types.ObjectId,
            ref: "estatu"
        }],*/
        programarAtencion:String
    },
    supervisor:{
        nombre: {
            type: "String",
            required: true
        },
        email:{
            type: "string",
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            index: { unique: true}
        },
         telefono: {
            type: "String",
            required: true
        },
        viaRecuperacion: String,
        periodoRecuperacion:String

    },
    uid: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},{

    timestamps:true,
    versionKey: false

    /*region:{
        type: Schema.Types.ObjectId,
        ref: "region"
    },*/
/*
    creacion: {
        type: 'Date',
        default: Date.now
    }*/
})

export const School = model("school", schoolSchema);
