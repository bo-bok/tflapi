var Hapi = require('hapi');
var server = new Hapi.Server();

var routes = require('./routes/index.js');

server.connection({
  host: 'localhost',
  port: '4000'
});

server.route(routes);

module.exports = server;
