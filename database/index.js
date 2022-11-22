const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  repoURL: String,
  watchers: String
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = {
  save: (repos, callback) => {
    Repo.insertMany(repos);
    callback;
  },

  retrive: (callback) => {
    Repo.find();
    callback;
  }
};