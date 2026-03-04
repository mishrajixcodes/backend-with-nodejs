import { Buffer } from "buffer";

const buffer1 = Buffer.alloc(4);//assign memory and make sure it has zero
const buffer2 = Buffer.allocUnsafe(4) //just assign memory 
//if we are creating allocUnsafe we need to write one extra line of fill
//buffer2.fill(0)
