import fs from "fs/promises";

const contentBuffer = await fs.readFile("text.txt");

console.log(contentBuffer.toString());

// node --inspect-brk app.js   for browser way to see encodings,bits