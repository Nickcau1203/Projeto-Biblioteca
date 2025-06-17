import express from "express";

// Importar todas as rotas
import booksRouter from "./books.routes.js";
import authorsRouter from "./authors.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/books", booksRouter);
router.use("/authors", authorsRouter);

// Rotas protegidas

export default router;