const BookService = require("../services/BookService");

module.exports = class Book {

    static async apiGetAllBooks(req, res, next) {

        try {
            const books = await BookService.getAllbooks();
            if (!books) {
                res.status(404).json("There are no books published yet!")
            }
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: error })
        }

    }

    static async apiGetBookById(req, res, next) {
        try {
            let id = req.params.id || {};
            const Book = await BookService.getBookById(id);
            res.json(Book);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async apiCreateBook(req, res, next) {
        try {
            const createdBook = await BookService.createBook(req.body);
            res.json(createdBook);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async apiUpdateBook(req, res, next) {
        try {
            let id = req.params.id || {};
            let data = req.body || {};

            const updatedBook = await BookService.updateBook(id, data);

            if (updatedBook.modifiedCount === 0) {
                throw new Error("Unable to update Book");
            }

            res.json(updatedBook);

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async apiDeleteBook(req, res, next) {
        try {
            const BookId = req.params.id;
            const deleteResponse = await BookService.deleteBook(BookId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

}