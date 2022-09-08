import { School } from "../models/School.js";


export const getSchool = async (req, res) => {
    try {
        const schools = await School.find({uid: req.uid}).populate({ 
            path:'uid'});

    res.json({ schools});
    } catch (error) {
        console.log (error);
            return res.status(500).json({error: "error del servidor"});
    }
}

export const createSchool = async (req, res) => {
    const{claveDeTrabajo, nombreEscuela, nivelEducativo, claveInegi, email, telefono, region, municipio, localidad,coordenadasLatitud, coordenadasLongitud, director, supervisor} = req.body;
    
    try {
        const newSchool = new School({ 
        claveDeTrabajo,nombreEscuela, nivelEducativo, claveInegi, email, telefono,region,municipio,localidad, coordenadasLatitud,coordenadasLongitud,director,supervisor , uid: req.uid})
//console.log(newSchool);
        const schoolSaved = await newSchool.save();
        res.status(201).json({schoolSaved});
       // console.log (schoolSaved);
    } catch (error) {
        console.log (error);
            return res.status(500).json({error: "error del servidor"});
        }
}
