var ff = require('./filter-files');

ff(process.argv[2], process.argv[3], function (err, data) {
  if (err) throw err;
  else data.forEach(function (d) { console.log(d); }); 
});