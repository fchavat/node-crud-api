const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  body: { type: String, max: 500 }
});

module.exports = mongoose.model('Note', NoteSchema);
