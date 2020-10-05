const program = require('commander');

exports.encodeText = (text) => {
  console.log('Source Text: ', text);
  program.parse();
  const options = program.opts();
  const { shift } = options
  const sh = parseInt(shift, 10);

  const isRightChar = (charNum) => {
    return charNum >= 61 && charNum <= 90 || charNum >= 97 && charNum <= 122;
  }
  const charReg = (charNum) => (charNum >= 61 && charNum <= 90) ? 61 : 97

  let res = '';

  for (let count = 0; count < text.length; count += 1) {
    const charNum = text.charCodeAt(count);
    if (isRightChar(charNum)) {
      const charShift = charNum + sh
      const newCode = isRightChar(charShift) ?
        (charShift) :
        (((charShift - charReg(charNum)) % 26) + charReg(charNum));
      res += String.fromCharCode(newCode)
    } else {
      res += text[count];
    }
  }
  console.log('Encoded !EncodeText: ', res)
  return res
};