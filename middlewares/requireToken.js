import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../helpers/tokenManager.js";
import { Role } from "../models/Role.js";
import { User } from "../models/User.js";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;

        if(!token)
            throw new Error("No Existe El Token En El Header Usa Bearer");
        token = token.split(" ")[1];
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
       // console.log(payload);
        req.uid = uid;
        next();

    } catch (error) {
        console.log(error);
        return res
       .status(401)
       .send({ error: tokenVerificationErrors[error.message] });
    }
}



//funcion para verificar el rol del usuario

export const isUser = async (req, res, next) =>{
    const user = await User.findById(req.uid)
    const roles = await Role.find({_id: { $in: user.roles}})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user"){
            next();
            return;
        }
    }
    return res.status(403).json("necesitas ser User Role");
}
export const isAdmin = async (req, res, next) =>{
    const user = await User.findById(req.uid)
    const roles = await Role.find({_id: { $in: user.roles}})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin"){
            next();
            return;
        }
    }
    return res.status(403).json("necesitas ser administrador");
}