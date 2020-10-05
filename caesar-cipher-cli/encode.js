const fs = require('fs');
const path = require('path');
const { userInput } = require('./userInput');
const { encodeText } = require('./encodeText');


exports.encode = (fileNameArg) => {
  // console.log(__dirname);
  // const fileName = fileNameArg ? fileNameArg : 'input.txt';

  if(!fileNameArg) {
    userInput()
  } else {
    const filePath = path.join(__dirname, 'data', fileNameArg);

    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
      if (error) {
        console.log(error);
      } else {

      }

    });
  }
    // return path.join(__dirname, 'data', fileNameArg);


};