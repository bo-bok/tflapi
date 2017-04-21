var test = require('tape');
// var Hapi = require('hapi');
// var Shot = require('shot');

var server = require('../../src/server.js');
// var router = require('../../src/routes/index.js')

// backend
test('test that tape is working with an initial passing test', (t) => {
  t.pass('success, tape is working');
  t.end();
})

// server
test('Initialize server test', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
})


test('home route returns a status code of 200', (t) => {
  var options = {
    method: 'GET',
    url: '/'
  };

  server.inject( options, (res) => {
  t.equal(res.statusCode, 200, 'should respond with a status code of 200');
  t.end();
  })
})

// does not throw an error method
// compare the hapi server object with my instance of the hapi server object

// test('test that server starts', (t) => {
//   let expected =
//   t.equal(, server.start(),'should return "'server is running on port', server.info.uri"');
//   t.end();
// })
