var http = require('http');

http.get(process.argv[2], function (res) {
  res.setEncoding('utf8');
  res.on('error', function (e) { throw e; } );
  res.on('data',  function (d) { console.log(d); });
  res.on('end',   function ()  { return; });
});