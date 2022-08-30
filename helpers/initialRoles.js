import {Role} from "../models/Role.js";

export const createRoles = async () =>{
    try {
        const contador = await Role.estimatedDocumentCount();

        if(contador >0) return;

        const values = await Promise.all([
            new Role({name: "admin"}).save(),
            new Role({name: "user"}).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "error de servidor"});
    }
    
}