var mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    year: Number,
    pages: Number,
    isbn: String,
    price: Number
});

module.exports = Book = mongoose.model('Book', bookSchema);
