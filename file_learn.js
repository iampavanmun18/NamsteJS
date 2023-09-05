const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
console.log('dirPath',dirPath)

const filePath = `${dirPath}/apple.txt`

console.log('filePath',filePath)


// fs.writeFileSync(`${dirPath}/file1.txt`,"This is a simple txt file") //This will create a file (file1.txt) and put text into it.

// file-create
fs.writeFileSync(filePath,"This is apple txt ")


//file-read
fs.readFile(filePath,'utf-8',(err,item)=>{
    console.log(item)
})

//update-file
fs.appendFile(filePath, "This is a updated data",(err)=>{
    if(!err) console.log("data");
})

//rename-file
fs.rename(filePath,`${dirPath}/fruit.txt` ,(err)=>{
    if(!err) console.log("data");

})

// delete a file
fs.unlinkSync(`${dirPath}/fruit.txt`)
