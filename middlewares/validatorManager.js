import { validationResult, body, param } from "express-validator";

export const validationResultExpress = (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

export const bodyRegisterValidator = [
    body("email", "Formato Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min:6}),
    bosy("password", "Formato De Password Incorrecto").custom(
        (value, {req})=>{
            if(value !== req.body.repassword){
                throw new Error("No Coinciden Las Contraseñas")
            }
            return value;
        }),
        validationResultExpress
];

export const bodyLoginValidator = [
    body("email","Formato Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min:6}),
    validationResultExpress
];

 export const paramDirectorioValidator = [
        param("id", "Formato no valido (expressValidator)").trim().notEmpty().escape(),validationResultExpress
    ];