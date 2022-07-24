const Book = require('../models/Book.js');


module.exports = class BookService {
    static async getAllbooks() {
        try {
            const allBooks = await Book.find();
            return allBooks;
        } catch (error) {
            console.log(`Could not fetch books ${error}`)
        }
    }

    static async createBook(data) {
        try {

            const newBook = {
                title: data.title,
                author: data.author,
                publisher: data.publisher,
                year: data.year,
                pages: data.pages,
                isbn: data.isbn,
                price: data.price
            }
            const response = await new Book(newBook).save();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getBookById(bookId) {
        try {
            const book = await Book.findById({ _id: bookId });
            return book;
        } catch (error) {
            console.log(`Book not found. ${error}`)
        }
    }

    static async updateBook(id, data) {
        try {
            let updatedBook = data;
            updatedBook.date = Date.now();
            console.log(updatedBook)
            const response = await Book.updateOne({ id: id }, { $set: updatedBook });
            return response;
        } catch (error) {
            console.log(`Could not update book ${error}`);

        }
    }

    static async deleteBook(bookId) {
        try {
            const response = await Book.findOneAndDelete({'_id':bookId});
            return response;
        } catch (error) {
            console.log(`Could not delete book ${error}`);
        }

    }
}