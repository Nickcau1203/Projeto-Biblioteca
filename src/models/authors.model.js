import prisma from "../../prisma/prisma.js";

class AuthorsModel {
    async findAll() {
        const authors = await prisma.author.findAll();

        return authors;
    }
    async create(data) { 
        const author = await prisma.author.create({
            data
        })
            
        return author;
    }
}

export default new AuthorsModel();
