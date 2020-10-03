const fs = require('fs')
const path = require('path')

exports.encode = (shift, fileNameArg) => {
    console.log('encode', shift)
    console.log(__dirname)
    const fileName = fileNameArg ? fileNameArg : 'input.txt'
    const filePath = path.join(__dirname, 'data', fileName)
    fs.readFile(filePath,'utf-8', (error, fileContent) => {
        if (error) {
            console.log(error)
        } else {
            return console.log(fileContent)
        }

    })
}