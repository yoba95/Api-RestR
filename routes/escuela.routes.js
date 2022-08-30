import { Router } from "express";
import { createEscuela, getEscuelaById, getEscuelas, updateEscuelaById, deleteEscuelaById } from "../controllers/escuela.controller.js";
import { requireToken, isUser, isAdmin } from "../middlewares/requireToken.js";
const router = Router();

router.post('/',[requireToken, isUser, isAdmin], createEscuela );
router.get('/', getEscuelas);
router.get('/:id', getEscuelaById);
router.patch('/:id', [requireToken, isUser, isAdmin], updateEscuelaById);
router.delete('/:id', [requireToken, isAdmin], deleteEscuelaById);

export default router;