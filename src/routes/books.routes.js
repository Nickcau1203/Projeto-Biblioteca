import express from "express";

import booksController from "../controllers/books.controller.js";

const router = express.Router();

// Rota para obter todos os livros
booksRouter.get("/", booksController.getAllBooks);

export default booksRouter;
