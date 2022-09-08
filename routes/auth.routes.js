import { Router } from "express";
import { register, login, logout, refreshToken} from "../controllers/auth.controller.js";
import { checkEmailExisted, checkRolesExisted } from "../middlewares/veryfySignup.js";
import { validationResultExpress, bodyRegisterValidator, bodyLoginValidator,  } from "../middlewares/validatorManager.js";
import { requireRefreshToken } from "../middlewares/requiereRefreshToken.js";


const router = Router();

router.post('/register',[checkEmailExisted, checkRolesExisted],bodyRegisterValidator,register);
router.post('/login', bodyLoginValidator,login);
router.get('/logout', logout);
//rutas para las peticiones de escuelas
//router.post('/escuelaCrear',requireToken ,escuela);
//router.get("/refresh", requireRefreshToken, refreshToken);



export default router;