var fs = require('fs'), filename = 'day1/testinput1a.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});
