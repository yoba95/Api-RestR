import { validationResult, body, param } from "express-validator";

export const validationResultExpress = (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

export const bodyRegisterValidator = [
    body("nombreCompleto", "Es Necesario Introducir Tu Nombre Completo").trim().notEmpty(),
    body("telefono", "Introducir 10 digitos").isLength({ min: 10, max:10 }),
    body("email", "Formato Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min:6}),
    body("password", "Formato De Password Incorrecto"),
    body("nombreOficina", "Es Necesario Introducir El Nombre De La Oficina").trim().notEmpty(),
        validationResultExpress
];

export const bodyLoginValidator = [
    body("email","Formato Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min:6}),
    validationResultExpress
];

/*
 export const paramDirectorioValidator = [
        param("id", "Formato no valido (expressValidator)").trim().notEmpty().escape(),validationResultExpress
    ];

    export const tokenHeaderValidator = [
    header("authorization", "No existe el token")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
];

export const tokenCookieValidator = [
    cookie("refreshToken", "No existe refresh Token")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
];
    */