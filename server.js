var Hapi = require('hapi');
var server = new Hapi.Server();

// var Inert = require('inert');

var routes = require('./src/routes/index.js');

server.connection({
  host: 'localhost',
  port: '4000'
});

// server.register(Inert, (err) => {
//   if (err) {
//     throw err
//   }
// });

server.route(routes);


server.start( (err) => {
  if (err) {
    throw err
  }
  else {
    console.log('server is running on port', server.info.uri)
  }
})


module.export = server;
