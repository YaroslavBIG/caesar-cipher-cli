const program = require('commander');

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

  switch (options.action) {
    case 'encode':
    case 'decode':
      encode(options.input);
      break;
    default:
      return console.log('unexpected action argument')
  }
} catch (e) {
  console.log(e);
}
