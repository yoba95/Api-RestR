import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
   // const expiresIn = 60*60*24; //una DIA
    const expiresIn = 60*15; //15 minutos
    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
        return { token, expiresIn}
    } catch (error) {
        console.log(error);
    }
}


export const generateRefreshToken = (uid, res) =>{
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn,});
        //guardar el refresh token en la cookie
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure:!(process.env.MODO === "developer"), 
            expires: new Date(Date.now()+expiresIn * 1000),
        });
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


