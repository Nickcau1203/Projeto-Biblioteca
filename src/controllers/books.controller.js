import booksModel from "../models/books.model.js";

class BooksController { 
    async getAllBooks(req, res) {
        try {
            const books = await booksModel.findAll();
            res.status(200).json(books);
        } catch (error) {
          console.error("Erro no controller de livros:", error);
          res.status(500).json({ error: "Erro ao buscar livros" });
        }
    }
    async createBook(req, res) {
        try {
            const book = await booksModel.create(req.body);
            res.status(201).json(book);
        } catch (error) {
            console.error("Erro ao criar livro:", error);
            res.status(500).json({ error: "Erro ao criar livro" });
        }
    }
}

export default new BooksController();
