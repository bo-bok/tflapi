var test = require('tape');
var nock = require('nock');
var request = require('request');
var TFLCall = require('../../../src/lib/TFLApiCall.js');
var nockJSON = require('../../nock.json');

test('check if TFL call returns the correct data', (t) => {
  var TFL = nock('https://api.tfl.gov.uk')
    .get('/line/mode/tube/status')
    .reply(200, nockJSON.OK)

  TFLCall(function (err, res) {
    var expected = JSON.stringify(nockJSON.OK);
    t.deepEquals(res, expected, 'check if the objects are the same')
    t.end()
  })
});


test('check if the callback returns an error, if TFL returns an error', (t) => {
  var TFL = nock('https://api.tfl.gov.uk')
    .get('/line/mode/tube/status')
    .replyWithError({'message': 'oops, something has gone wrong'})

  TFLCall(function (err, res) {
    var expected = {'message': 'oops, something has gone wrong'};
    t.deepEquals(err, expected, 'We recieved an error from TFL');
    t.end();
  })
});
























// test('check if TFL call returns the correct data', (t) => {
//   TFLCall(function (err, res) {
//     var result = JSON.parse(res).length;
//     var expected = 11;
//     t.deepEquals(result, expected, 'The length of the array is 11 as expected');
//     t.end();
//   })
// });
