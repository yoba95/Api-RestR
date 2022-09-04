import { Router } from "express";
import { register, login, logout} from "../controllers/auth.controller.js";
import { checkEmailExisted, checkRolesExisted } from "../middlewares/veryfySignup.js";
import { validationResultExpress, bodyRegisterValidator, bodyLoginValidator,  } from "../middlewares/validatorManager.js";
import { requireToken } from "../middlewares/requireToken.js";


const router = Router();

router.post('/register',[checkEmailExisted, checkRolesExisted],validationResultExpress,bodyRegisterValidator,register);
router.post('/login', validationResultExpress, bodyLoginValidator,login);
router.get('/logout', logout);
//rutas para las peticiones de escuelas
//router.post('/escuelaCrear',requireToken ,escuela);


export default router;