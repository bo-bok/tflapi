var server = require('./src/server.js')

server.start( (err) => {
  if (err) {
    throw err
  }
  else {
    console.log('server is running on port', server.info.uri)
  }
})
