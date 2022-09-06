import {Estatu} from "../models/EstatusSchool.js";

export const createEstatus = async () =>{
    try {
        const contador = await Estatu.estimatedDocumentCount();

        if(contador >0) return;

        const values = await Promise.all([
            new Role({name: "activo"}).save(),
            new Role({name: "inactivo"}).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "error de servidor"});
    }
    
}