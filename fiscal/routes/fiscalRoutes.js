import express from "express";
import { importarXML, listarNotas } from "../controllers/nfeController.js";

const router = express.Router();

router.post("/nfe/importar", importarXML);
router.get("/nfe", listarNotas);

export default router;
