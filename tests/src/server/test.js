var test = require('tape');
var shot = require('shot');

test('Initialize', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
})
