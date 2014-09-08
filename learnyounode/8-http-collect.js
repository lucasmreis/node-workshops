var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (res) {
  res.pipe(bl (function (err, response) {
    if (err) console.log('Error.');
    console.log(response.length);
    console.log(response.toString());
  }));
});