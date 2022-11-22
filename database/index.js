const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  username: String,
  repoURL: String,
  watchers: String
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = {
  save: (repos, callback) => {
    Repo.insertMany(repos , (err, data) => {
      callback(err, data);
    });
  },

  retrive: (callback) => {
    Repo.find({})
    .sort({'watchers': -1})
    .limit(25)
    .exec((err, data) => {
      callback(err, data);
    });
  }
};