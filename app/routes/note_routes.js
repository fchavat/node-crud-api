module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body);

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
  console.log('[i] note_routes exported succesfully');
};
