const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
console.log('dirPath',dirPath)

const filePath = `${dirPath}/apple.txt`

console.log('filePath',filePath)


// fs.writeFileSync(`${dirPath}/file1.txt`,"This is a simple txt file") //This will create a file (file1.txt) and put text into it.

fs.writeFileSync(filePath,"This is s apple txt")
