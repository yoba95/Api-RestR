import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    password:{
        type: String,
        required: true
    },
    roles:[{
        ref: "role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true
})


//metodo para hashear la contraseña
userSchema.pre("save", async function(next){
    const user = this

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