import {Router} from "express";
import { createUser } from "../controllers/user.controller.js";
import { requireToken, isUser, isAdmin } from "../middlewares/requireToken.js";
import { checkRolesExisted } from "../middlewares/veryfySignup.js";
//TODO: RUTAS SOLO PARA ADMINISTRADOR PARA CREAR USUARIOS
const router = Router();

router.post("/user",[ requireToken, isAdmin, checkRolesExisted ] ,createUser);

export default router;