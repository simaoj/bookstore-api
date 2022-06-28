var mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    year: Number,
    pages: Number
});

module.exports = Book = mongoose.model('Book', bookSchema);
