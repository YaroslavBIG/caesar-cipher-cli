const program = require('commander');
const { writeToFile } = require('./writeToFile');

exports.encodeText = (text) => {
  console.log('Source Text: ', text);
  program.parse();
  const options = program.opts();
  const { shift, action, output } = options;
  const sh = shift > 26 ? (parseInt(shift, 10) % 26) : parseInt(shift, 10);

  const isRightChar = (charNum) => {
    return charNum >= 65 && charNum <= 90 || charNum >= 97 && charNum <= 122;
  };
  const charReg = (charNum) => (charNum >= 65 && charNum <= 90) ? 61 : 97;

  const isEncode = () => action === 'encode';

  let res = '';

  for (let count = 0; count < text.length; count += 1) {
    const charNum = text.charCodeAt(count);
    if (isRightChar(charNum)) {
      const charShift = isEncode() ? (charNum + sh) : (charNum - sh);
      const newCode = isRightChar(charShift) ?
        (charShift)
        :
        isEncode() ?
          (((charShift - charReg(charNum)) % 26) + charReg(charNum))
          :
          charShift + 26;

          res += String.fromCharCode(newCode);
    } else {
      res += text[count];
    }
  }
  output ? writeToFile(res) : console.log('Result: ', res);
};