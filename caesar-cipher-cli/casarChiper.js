const program = require('commander');
const fs = require('fs');

const {
  encode
} = require('./encode');

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);


program
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .requiredOption('-a, --action <string>', 'an action encode/decode');

try {
  program.parse();
  const options = program.opts();

  if(options.output) {
    const path = require('path');
    const filePath = path.join(__dirname, options.output);

    fs.access(filePath, function(error){
      if (error) {
        process.stderr.write('The output file is missing or you don\'t have enough permissions');
        process.exit(40)
      }
  })
  }

  switch (options.action) {
    case 'encode':
    case 'decode':
      encode(options.input);
      break;
    default:
      return process.stderr.write('unexpected action argument')
  }
} catch (e) {
  console.log(e);
}
