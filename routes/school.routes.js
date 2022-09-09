import { Router } from "express";
import { createSchool, getSchool, getSchools, updateSchool } from "../controllers/school.controller.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

//GET              /api/v1/schools                  OBTENER TODAS LAS ESCUELAS
//Get             /api/v1/schools/:id               BUSCAR UNA SOLA ESCUELA
//POST           /api/v1/schools                    create ESCUELA
//PATCH/PUT      /api/v1/schools/:id                update ESCUELA

router.get("/", requireToken , getSchools);
router.get("/:id", requireToken, getSchool);
router.post("/",requireToken ,createSchool);
router.patch("/:id", requireToken,updateSchool);

export default router;