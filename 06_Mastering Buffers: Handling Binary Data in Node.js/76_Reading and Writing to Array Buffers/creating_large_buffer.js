const a = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const b = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view = new DataView(a);
const view2 = new DataView(b);

for (let i = 0; i < view.byteLength; i++) {
  view.setInt8(i, i + 1);
  view2.setInt8(i, i + 1);
}

console.log(view)
console.log(view2)