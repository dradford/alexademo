const rp = require('request-promise');

const options = {
  uri: `https://raw.githubusercontent.com/bugcrowd/vulnerability-rating-taxonomy/master/vulnerability-rating-taxonomy.json`,
  transform: function (body) {
    return JSON.parse(body);
  }
};

rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });
