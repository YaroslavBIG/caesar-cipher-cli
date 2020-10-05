const fs = require('fs');
const program = require('commander');
const path = require('path');

exports.writeToFile = (text) => {
  program.parse();
  const options = program.opts();
  const { output } = options;
  const filePath = path.join(__dirname, output);

  fs.appendFile(filePath, text, (err, ) => {
    if(err) return console.log(err);
  } )
}