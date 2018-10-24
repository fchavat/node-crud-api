const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const db          = require('./config/db');

const app         = express();

const port        = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(`Error::::${err}`);

  console.log('[i] Connected via mongoose');

  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log(`[i] Listening on port ${port}...`);
  });
});
