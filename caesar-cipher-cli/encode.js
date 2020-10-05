const fs = require('fs');
const path = require('path');
const program = require('commander');
const { decodeText } = require('./decodeText');
const { userInput } = require('./userInput');
const { encodeText } = require('./encodeText');


exports.encode = (fileNameArg) => {
  program.parse();
  const options = program.opts();
  const { action } = options;

  if(!fileNameArg) {
    userInput()
  } else {
    const filePath = path.join(__dirname, fileNameArg);
    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
      if (error) {
        console.log(error);
      } else {
        action === 'encode' ? encodeText(fileContent) : decodeText(fileContent);
      }
    });
  }
};