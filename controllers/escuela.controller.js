import { Escuela } from "../models/Escuela.js";

export const createEscuela = async (req, res) =>{
    const { claveDeTrabajo, nombreEscuela, nivelEducativo, telefono, creacion} = req.body;
//console.log(req.body)
    try {

       const newEscuela = new Escuela({claveDeTrabajo, nombreEscuela, nivelEducativo, telefono, creacion});

       const escuelaSaved = await newEscuela.save();
        
        res.status(201).json(escuelaSaved);
    } catch (error) {
        return res.status(500).json({error: "error del servidor"})
    }
    //res.json("crear escuela");
}

export const getEscuelas = async (req, res) =>{
    const escuelas = await Escuela.find();
    res.status(201).json(escuelas);
}

export const getEscuelaById = async (req, res) =>{
    try {
        const {id} = req.params

        const escuela = await Escuela.findById(id);
        if (!escuela) return res.status(404).json({error: "No existe la escuelas"});
        
        return res.json({escuela});
       // console.log(escuela);
    } catch (error) {
         console.log(error);
    
        return res.status(500).json({error: "error del servidor"});
    }
    
}

export const updateEscuelaById = async (req, res) =>{
    const updateEscuela = await Escuela.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
     return res.status(200).json(updateEscuela);
}

export const deleteEscuelaById = async (req, res) =>{
    try {
        const {id} = req.params;
        const escuela = await Escuela.findById(id);
        if(!escuela) return res.status(404).json({error: "no existe la escuela"});

    await escuela.remove()

    return res.json(escuela);
    } catch (error) {
        return res.status(500).json({error: "error del servidor"});
    }
    
}