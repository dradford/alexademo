const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://bugcrowd.com/programs`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    $('.bc-panel__title').each(function(i, elem) {
      console.log($(this).text());
    });
  })
  .catch((err) => {
    console.log(err);
  });
