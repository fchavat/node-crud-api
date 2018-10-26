const Note = require('../models/note');

exports.getNote = (req, res) => {
  Note.findById(req.params.id, (err, item) => {
    if (err) {
      throwError(res, err);
    } else {
      res.send(item);
    }
  });
};

exports.updateNote = (req, res) => {
  Note.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      throwError(res, err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
}

exports.deleteNote = (req, res) => {
  Note.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      throwError(res, err);
    } else {
      res.send('Successfully deleted.');
    }
  })
}

exports.createNote = (req, res) => {
  let newNote = {
    title: req.body.title,
    body: req.body.body,
  }
  Note.create(newNote, (err, note) => {
    if (err) {
      throwError(res, err);
    } else {
      res.send(note);
    }
  });
}

function throwError(res, err) {
  console.log(`Error:::: ${err}`);
  res.send({ 'Error': err });
}
