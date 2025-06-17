import express from "express";

// Importar todas as rotas
import authorsRouter from "./authors.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/authors", authorsRouter);

// Rotas protegidas

export default router;