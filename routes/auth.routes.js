import { Router } from "express";import { register, login } from "../controllers/auth.controller.js";
import { checkEmailExisted, checkRolesExisted } from "../middlewares/veryfySignup.js";
const router = Router();

router.post('/register',[checkEmailExisted, checkRolesExisted], register);
router.post('/login', login);


export default router;