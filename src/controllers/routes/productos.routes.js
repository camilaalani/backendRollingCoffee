import { Router } from "express";
import { listarProductos } from "../productos.controllers.js";

const router = Router();

//como creo las rutas
router.route("/productos").get(listarProductos);

export default router;