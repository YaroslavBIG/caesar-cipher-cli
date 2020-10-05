const { encodeText } = require('./encodeText');

const readline = require("readline");

exports.userInput = (shift) => {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.on('line', line => {
    process.stdout.write(line + '\n')
    encodeText(line, shift)
  })
}