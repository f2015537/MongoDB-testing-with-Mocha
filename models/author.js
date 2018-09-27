const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ES6 Promises
mongoose.Promise = global.Promise;

//Create Schema and Model
const BookSchema = new Schema({
	title: String,
	pages: Number
});


const AuthorSchema = new Schema({
	name: String,
	age: Number,
	books: [BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;