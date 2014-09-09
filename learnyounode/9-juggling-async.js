var http = require('http');
var bl = require('bl');

var url = [2,3,4].map(function (n) { return process.argv[n]; });  

http.get(url[0], function (res0) {
  res0.pipe(bl (function (err0, response0) {
    if (err0) console.log('Error.');
    console.log(response0.toString());
    http.get(url[1], function (res1) {
      res1.pipe(bl (function (err1, response1) {
        if (err1) console.log('Error.');
        console.log(response1.toString());
        http.get(url[2], function (res2) {
          res2.pipe(bl (function (err2, response2) {
            if (err2) console.log('Error.');
            console.log(response2.toString());
          }));
        });
      }));
    });
  }));
});