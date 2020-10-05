const fs = require('fs');
const program = require('commander');
const path = require('path');

exports.writeToFile = (text) => {
  program.parse();
  const options = program.opts();
  const { output } = options;
  const filePath = path.join(__dirname, output);

  fs.access(filePath, function(error){
    if (error) {
      process.stderr.write('The file is missing or you don\'t have enough permissions');
      process.exit(40)
    } else {
      fs.appendFile(filePath, text + '\n', (err, ) => {
        if(err) {
          process.stderr.write('something went wrong');
          process.exit(50)
        } else {
          process.stdout.write(`Result append to ${filePath} \n`);
        }
      } )
    }
  });


}