import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    nombreCompleto: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    telefono:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,//limpiar campos, quitar espacios
        unique: true,//para ser el email unico
        lowercase: true,
        index: { unique: true},//genra la busqueda mas rapida para documento propio de mongo
    },
    password:{
        type: String,
        required: true
    },
    nombreOficina:{
        type: String,
        required:true,
        lowercase: true,
        trim: true
    },
    roles:[{
        type: Schema.Types.ObjectId,
        ref: "role"
    }]
},{
    timestamps:true,
    versionKey: false
})


//metodo para hashear la contraseña
userSchema.pre("save", async function(next){
    const user = this
    //if para cuando cambie la contraseña el usuario
    if (!user.isModified('password')) return next();

   try {
    const salto =  await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salto);
    next();
   } catch (error) {
    console.log(error)
    throw new Error ("fallo el hash de contraseña")
   } 
});

//metodo para comparar la contraseña de mongodb con la del usuario que ingrese en el login
userSchema.methods.comparePassword = async function( candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
};


export const User = model("user", userSchema);
/*
 uid: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    */