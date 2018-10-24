module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send('Your are in /notes');
  });
  console.log('[i] note_routes exported succesfully');
};
