import { Estatus } from "../models/EstatusSchool.js";

export const checkEstatus = (req, res, next)  => {
    const {estatus} = req.body;
    if (estatus) {
        for (let i = 0; i < estatus.length; i++) {
            if (!Estatus.includes(estatus[i])) {
                return res.status(404).json("El Estatus no existe")
            }
        }
    }
    next();
}
//funcion para cambiar el estatus de el director

