var Hapi = require('hapi');
var server = new Hapi.Server;

server.connection({
  host: 'localhost',
  port: '4000'
});

server.start( (err) => {
  if (err) {
    throw err
  }
  else {
    console.log('server is running on port', server.info.uri)
  }
})
