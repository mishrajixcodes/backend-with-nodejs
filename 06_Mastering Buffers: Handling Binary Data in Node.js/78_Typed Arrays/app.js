const unit8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024);

unit8Array.forEach((_, index) => {
  unit8Array[index] = index + 1;
});

console.log(unit8Array);
