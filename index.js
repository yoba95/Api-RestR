import "dotenv/config";
import express from "express";
import "./database/connectdb.js";
import authRoutes from "./routes/auth.routes.js"
import {createRoles} from "./helpers/initialRoles.js";
import schoolRouter from "./routes/school.routes.js" 

const app = express();
//iniciar los roles por defecto
createRoles();

app.use(express.json());
//app.use("/api/v1/auth", authRoutes);
//**** RUTAS LOGIN  */
app.use('/api/v1/auth', authRoutes)

//Todo: ruta para escuelas
app.use('/api/v1/schools', schoolRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));