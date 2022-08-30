import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
    const expiresIn = 60*24; //un dia

    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
        return { token, expiresIn}
    } catch (error) {
        console.log(error);
    }
}

export  const tokenVerificationErrors = {
        "invalid signature": "la firma del JWT no es valida",
        "jwt expired": "JWT expirado",
        "invalid token": "Token no valido",
        "No Bearer": "Utiliza formato Bearer",
        "jwt malformed": "JWT formato no valido",
       }