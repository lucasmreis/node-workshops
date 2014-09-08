fs = require('fs');
path = require('path');

var ff = function (inputpath, ext, callback) {
  fs.readdir(inputpath, function (err, data) {
    if (err) return callback(err);
    return callback(null, data.filter(function (f) {
      return (path.extname(f) === '.' + ext);
    }));
  });
}

module.exports = ff;