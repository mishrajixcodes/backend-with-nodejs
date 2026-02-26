const a = new ArrayBuffer(4);

const view = new DataView(a);

view.setInt16(0, 260); // store 260 on zero th place

view.setInt16(2, 260, true);
//why we using index 2 because it is 16bits means it take 2byte(total 16) and we already used strating 2 and if we start from 0or1 it will overite previous value
//third arugement to say  use little endian. by default it uses big endian.

console.log(a);
