var TFLCall = require('../lib/TFLApiCall.js');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    TFLCall((err, res) => {
      if (err) {
        return reply('sorry there\'s been an error');
      }
      else {
        return reply('hello home');
      }

  })
}
}
