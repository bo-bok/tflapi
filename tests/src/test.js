var test = require('tape');
var Shot = require('shot');

var server = require('server');

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

test('test that server starts', (t) => {
  let expected =
  t.equal(, server.start(),'should return "'server is running on port', server.info.uri"');
  t.end();
})

Shot.inject({}, )
