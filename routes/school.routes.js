import { Router } from "express";
import { createSchool, getSchool } from "../controllers/school.controller.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

//GET              /api/v1/schools                  OBTENER TODAS LAS ESCUELAS
//Get             /api/v1/schools/:id               BUSCAR UNA SOLA ESCUELA
//POST           /api/v1/schools                    create ESCUELA
//PATCH/PUT      /api/v1/schools/:id                update ESCUELA
//PATCH        /api/v1/schoolS/:id                CAMBIAR EL ESTATUS DE LA ESCUELA
/*
router.get("/", requireToken , getLinks);
router.get("/:id", requireToken, getLink);
router.post("/", requireToken, bodyLinkValidator ,createLink);
router.delete("/:id", requireToken, paramLinkValidator ,removeLink);
router.patch("/:id", requireToken,paramLinkValidator, bodyLinkValidator, updateLink);
*/
router.get("/", requireToken , getSchool);
router.post("/",requireToken ,createSchool);

export default router;