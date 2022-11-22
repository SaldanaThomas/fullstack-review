const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (username) => {
  const options = {
    url: 'https://api.github.com/users/' + 'SaldanaThomas' + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url)
  .then(data => data);

};

module.exports.getReposByUsername = getReposByUsername;