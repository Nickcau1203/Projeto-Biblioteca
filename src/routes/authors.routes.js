import express from "express";

import authorsController from "../controllers/authors.controller.js";

const authorsRouter = express.Router();

// Rota para obter todos os livros
authorsRouter.get("/", authorsController.getAllAuthors);
authorsRouter.post("/", authorsController.createAuthor);

export default authorsRouter;
