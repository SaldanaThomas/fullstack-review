const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (username, callback) => {
  const options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options.headers)
  .then(({data}) => {
    const temp = [];
    data.forEach(item => {
      temp.push({
        id: item.id,
        username: item.owner.login,
        repoURL: item.html_url,
        watchers: item.watchers
      });
    });
    return temp;
  })
  .then(data => callback(null, data))
  .catch(err => callback(err, null));
};

module.exports.getReposByUsername = getReposByUsername;