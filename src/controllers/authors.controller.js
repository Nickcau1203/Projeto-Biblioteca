import authorsModel from "../models/authors.model.js";

class AuthorsController { 
    async getAllAuthors(req, res) {
        try {
            const authors = await authorsModel.findAll();
            res.status(200).json(authors);
        } catch (error) {
          console.error("Erro no controller de autores:", error);
          res.status(500).json({ error: "Erro ao buscar autores" });
        }
    }
    async createAuthor(req, res) {
        try {
            const author = await authorsModel.create(req.body);
            res.status(201).json(author);
        } catch (error) {
            console.error("Erro ao criar autor:", error);
            res.status(500).json({ error: "Erro ao criar autor" });
        }
    }
}

export default new AuthorsController();
