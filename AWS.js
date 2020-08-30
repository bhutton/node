const aws = require('aws-sdk');
const myFunction = require('./myFunction')

exports.handler = function(event, context) {
  return new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve(myFunction.getTest())
    }, 250)
  }).then(function (value) {
    return value
  });
}
