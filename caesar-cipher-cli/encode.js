const fs = require('fs');
const path = require('path');
const { userInput } = require('./userInput');
const { encodeText } = require('./encodeText');


exports.encode = (input) => {

  if(!input) {
    userInput()
  } else {
    const filePath = path.join(__dirname, input);
    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
      if (error) {
        process.stderr.write('The file is missing or you don\'t have enough permissions');
        process.exit(40)
      } else {
        encodeText(fileContent);
      }
    });
  }
};