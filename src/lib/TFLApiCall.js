const request = require('request');

const TFLCall = (callback) => {
  request('https://api.tfl.gov.uk/line/mode/tube/status', (err, res, body) => {
    if (err) {
      return callback(err, null)
    }
    else {
      // var parsedObj = JSON.parse(body);
      // for only bakerloo line info
      // var bakerlooLineInfo = parsedObj.filter(function(tubeLines) {
      //   return tubeLines.name == 'Bakerloo';
      // })
      //
      // var tubeLineStatus = parsedObj.map(function(tubeLines){
      //   var newObj = {};
      //   newObj['name'] = tubeLines.name;
      //   newObj['status'] = tubeLines.lineStatuses[0].statusSeverityDescription;
      //   return newObj;
      // })
      // console.log(tubeLineStatus);
      return callback(null, body)
    }
  })
}

module.exports = TFLCall;
