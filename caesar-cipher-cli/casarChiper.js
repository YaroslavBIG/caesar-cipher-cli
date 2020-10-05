const fs = require('fs');
const program = require('commander');
const {
  encode
} = require('./encode');
const {
  decode
} = require('./decode');

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
  console.log('Options: ', options);
  switch (options.action) {
    case 'encode':
      encode(options.input);
      break;
    case 'decode':
      decode(options.shift)
      break;
    default:
      return console.log('unexpected action argument')
  }


} catch (e) {
  console.log(e);

}
