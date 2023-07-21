const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  director: {type: String, required: true},
  synopsis: {type: String},
  production: {type: String},
  release_date: {type: Date},
  added_on: {type: Date, default: Date.now},
  updated_date: {type: Date, default: Date.now}
});

module.exports = Movie = mongoose.model('movie', MovieSchema);