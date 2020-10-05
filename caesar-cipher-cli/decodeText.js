const program = require('commander');

exports.decodeText = (text) => {
    console.log('DECODE', text)
    program.parse();
    const options = program.opts();
    const { shift } = options

}