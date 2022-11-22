const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index');

let app = express();
app.use(express.json());
app.use(express.static('client/dist'));

app.post('/repos', (req, res) => {
  github.getReposByUsername(req.body.user, (err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      db.save(data, (err, data) => {
        err ? res.status(404).send() : res.status(201).send();
      });
    }
  });
});

app.get('/repos', function (req, res) {
  db.retrieve((err, data) => {
    err ? res.status(404).send() : res.status(200).send(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});