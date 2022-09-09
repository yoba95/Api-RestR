import { School } from "../models/School.js";


export const getSchools = async (req, res) => {
    try {
        const schools = await School.find({uid: req.uid}).populate({ 
            path:'uid',select: '_id'});

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


export const getSchool = async (req, res) => {
    try {
        const {id} = req.params
        const school = await School.findById(id).populate({ 
            path:'uid', select: '_id' });
        console.log(school);
        if (!school) return res.status(404).json({error: "No Existe La Escuela"});

        if (!school.uid.equals(req.uid)) return res.status(401).json({error: "No Le Pertence Ese Registro"});
console.log(school);
        return res.json({school});
        
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({error: "Formato id incorrecto"});
        }
        return res.status(500).json({error: "error del servidor"});
    }

}

export const updateSchool = async (req, res) =>{

   try {
    
    const {id} = req.params;
    const {datos} = req.body;
        console.log(id)
        console.log(datos)
    const school = await School.findById(id)

    school.datos = school;
    await school.save();
    return res.json({ school });

   } catch (error) {
    console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({error: "Formato id incorrecto"});
        }
        return res.status(500).json({error: "error del servidor"});
   }
}

/*
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
*/