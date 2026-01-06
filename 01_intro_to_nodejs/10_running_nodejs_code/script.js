const fs = require('fs')

const text = fs.readFileSync('./text.txt')
console.log(text.toString())

//to write the file we use thisone
 fs.writeFileSync("./text.txt","This is edited text") //this will change the existing text and add new one

fs.renameSync("./text.txt","./rename.txt")//to rename file


console.log("This is the End Hold you Breath....")

console.log(globalThis) //replecement for window objects in browser.nodejs has different global object.it name is "Global" in browser it is "Window".