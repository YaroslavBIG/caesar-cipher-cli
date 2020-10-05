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
        console.log(error);
      } else {
        encodeText(fileContent);
      }
    });
  }
};