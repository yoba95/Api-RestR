import "dotenv/config";
import express from "express";
import "./database/connectdb.js";
import authRoutes from "./routes/auth.routes.js"
import {createRoles} from "./helpers/initialRoles.js";
import escuelaRoutes from "./routes/escuela.routes.js";
import userRouter from "./routes/user.routes.js"

const app = express();
//iniciar los roles por defecto
createRoles();

app.use(express.json());
//app.use("/api/v1/auth", authRoutes);
//**** RUTAS LOGIN  */
app.use('/api/v1/auth', authRoutes)

//TODO: RUTA DE PRUEBA PARA PROTEGER LAS RUTAS POR ROLES
app.use('/api/v1/escuela', escuelaRoutes);

//TODO: RUTA PARA CREAR USUARIOS admin
app.use('/api/v1', userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));