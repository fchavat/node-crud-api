var ObjectID = require('mongodb').ObjectID;
const notes_controller = require('../controllers/notes_controller');

module.exports = function(app, db) {

  app.get('/notes/:id', notes_controller.getNote);

  app.put('/notes/:id', notes_controller.updateNote);

  app.delete('/notes/:id', notes_controller.deleteNote);

  app.post('/notes', notes_controller.createNote);

  app.get('/notes', notes_controller.getNoteList);

  console.log('[i] note_routes exported successfully');
};
