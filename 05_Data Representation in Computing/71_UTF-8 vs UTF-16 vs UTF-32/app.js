//Buffer to Word without using toString() method

import fs from "fs/promises";

const contentBuffer = await fs.readFile("text.txt");
// console.log(contentBuffer.toString())

function bufferToString(buffer) {
    let content = ""
    buffer.forEach((el) => {
        content += String.fromCharCode(el)
    })
    return content
}

console.log(bufferToString(contentBuffer)) 






