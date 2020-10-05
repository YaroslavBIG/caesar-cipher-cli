const { encodeText } = require('./encodeText');
const readline = require("readline");
const program = require('commander');

exports.userInput = () => {
  program.parse();
  const options = program.opts();
  const { action } = options;

  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.on('line', line => {
    process.stdout.write(`${action}\n`)
    encodeText(line);
  })
}