/*
 File name: books.js,
 Author's name: pravalika,
 StudentID: 301291332,
 Web App name: comp229-f2020-midterm
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('book', Book);
