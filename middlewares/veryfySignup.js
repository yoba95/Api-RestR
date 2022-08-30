import { ROLES } from "../models/Role.js";
import { User } from "../models/User.js";

//verificar si el correo existe
export const checkEmailExisted = async (req, res, next) => {
    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(404).json("el email ya existe")

    next();
}

export const checkRolesExisted = (req, res, next)  => {
    const { roles} = req.body;
    if (roles) {
        for (let i = 0; i < roles.length; i++) {
            if (!ROLES.includes(roles[i])) {
                return res.status(404).json("El rol no existe")
            }
        }
    }
    next();
}


