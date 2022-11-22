const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index');

let app = express();
app.use(express.json());
app.use(express.static('client/dist'));

app.post('/repos', (req, res) => {
  let data = '';
  req.on('data', (chunk) => data += chunk);
  req.on('end', () => {
    console.log(github.getReposByUsername(data));
      // .then(repos => db.save(repos))
      // .catch(err => res.status(404).send())
      // .then(() => callback(null))
      // .catch(err => res.status(404).send());
  });
});

app.get('/repos', function (req, res) {
  console.log('IN SERVER -> GET');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});