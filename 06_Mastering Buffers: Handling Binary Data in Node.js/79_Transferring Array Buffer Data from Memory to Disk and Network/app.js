//How to permanently save arrayBuffer in Storage
//ram to disk

import fs from "fs/promises"

const uint8Array = new Uint8Array(4);

uint8Array[0] = 0x41;
uint8Array[1] = 0x4d;
uint8Array[2] = 0x41;
uint8Array[3] = 0x4e;

// console.log(uint8Array);

// const decoder = new TextDecoder("utf8");

// console.log(decoder.decode(uint8Array));

const view = new DataView(uint8Array.buffer)

fs.writeFile("bufferText.txt",view)
