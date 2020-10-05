
exports.encodeText = (text, shift) => {
  console.log('Source Text: ', text);
  let res = '';
  const isRightChar = (charNum) => {
    console.log(charNum >= 61 && charNum <= 90 || charNum >= 97 && charNum <= 122)
    return charNum >= 61 && charNum <= 90 || charNum >= 97 && charNum <= 122;
  }

  const charReg = (charNum) => (charNum >= 61 && charNum <= 90) ? 61 : 97
  const sh = parseInt(shift, 10);
  for (let count = 0; count < text.length; count += 1) {
    const charNum = text.charCodeAt(count);
    if (isRightChar(charNum)) {
      const charShift = charNum + sh
      console.log('%', ((charShift - charReg(charNum)) % 26))
      const newCode = isRightChar(charShift) ?
        (charShift) :
        (((charShift - charReg(charNum)) % 26) + charReg(charNum));
      res += String.fromCharCode(newCode)

    } else {
      res += text[count];
    }

    // const newCharNum = charNum + sh;

  }

  console.log('Encoded: ', res);
};