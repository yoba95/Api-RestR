import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schoolSchema = new Schema({
    claveDeTrabajo:{
        type: "String",
        required: true,
        trim:true,
    },
    nombreEscuela: {
     type: "String",
     required: true,
     uppercase: true,
     trim: true
    },
    nivelEducativo: {
        type: "String",
        required: true,
        uppercase: true,
        trim: true
    },
    email:{
        type: "string",
        trim: true,
        lowercase: true,
        index: { unique: true},
    },
    telefono: {
        type: "String",
        trim: true
    },
    region: {
        claveRegion:{
            type: "String",
            required: true,
            trim: true
        },
        name: {
            type: "String",
            required: true,
            uppercase: true,
            trim: true
        } 
    },  
    claveInegi: {
        type:"String",
        required:true,
        trim: true
    },
    municipio:{
            claveMunicipio:{
                type: "String",
                required: true,
                trim: true
            },
            nombre: {
                type: "String",
                required: true,
                uppercase: true,
                trim: true
            },
    },
    localidad:{
            claveLocalidad:{
                type: "String",
                required: true,
                trim: true
            },
            nombre:{
                type: "String",
                required: true,
                lowercase: true,
                trim: true
            },
            calle: {
                type: "String",
                required: true,
                uppercase: true,
                trim: true
            },
            numExterior: {
                type: "String",
                trim: true
            },
            numInterior:{
                type: "String",
                trim: true
            },
            colonia: {
                type: "String",
                uppercase: true
            },
            codigoPostal: {
                type: "String",
                required: true,
                trim: true
            },
        },
    coordenadasLatitud: Number,
    coordenadasLongitud: Number,
    director:{
        nombre: {
            type: "String",
            required: true,
            uppercase: true,
            trim: true
        },
        sindicato: {
            type: "String",
            uppercase: true,
            trim: true
        },
        telefono: {
            type: "String",
            trim: true
        },
        puesto: {
            type: "String",
            uppercase: true,
            trim: true
        },
        email:{
            type: "string",
            trim: true,
            lowercase: true,
            index: { unique: true}
        },
        estatus: {
            type: "String",
            uppercase: true,
            trim: true
        },
        programarAtencion:{
            type: "String",
            uppercase: true,
            trim: true
        }
    },
    supervisor:{
        nombre: {
            type: "String",
            required: true,
            uppercase: true,
            trim: true
        },
        email:{
            type: "string",
            trim: true,
            lowercase: true,
            index: { unique: true}
        },
         telefono: {
            type: "String",
            trim: true
        },
        viaRecuperacion: {
            type: "String",
            uppercase: true,
            trim: true
        },
        periodoRecuperacion:{
            type: "String",
            uppercase: true,
            trim: true
        }

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
