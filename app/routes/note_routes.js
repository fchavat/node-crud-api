var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': err });
      } else {
        res.send(item);
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const note = {
      title: req.params.title,
      body: req.params.body
    };
    db.collection('notes').updateOne(details, { $set: note }, (err, result) => {
      if (err) {
        console.log(`Error:::: ${err}`)
        res.send({ 'error': err });
      } else {
        res.send(note);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('notes').deleteOne(details, (err) => {
      if (err) {
        res.send({ 'error': err });
      } else {
        res.send(`Note ${id} successfully deleted`)
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = {
      title: req.body.title,
      body: req.body.body
    };
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has ocurred' });
      } else {
        res.send(result.ops[0]);
      };
    });
  });
  console.log('[i] note_routes exported successfully');
};
