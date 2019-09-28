var fs = require('fs');
var moment = require('moment');

var filename = './example.txt';

var content = fs.readFileSync(filename, 'utf8');

var regex = /(\d\d\/\d\d\/\d\d)/g;

function replacer(match, date, offset, string) {
  return moment(date, 'DD/MM/YY')
    .add(112, 'days')
    .format('DD/MM/YY');
}

var newContent = content.replace(regex, replacer);

console.log(newContent);
