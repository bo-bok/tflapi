var test = require('tape');
var shot = require('shot');

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
