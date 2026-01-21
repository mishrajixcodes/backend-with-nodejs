function sum(...nums) {
  return nums.reduce((curr, accu) => {
    return curr + accu;
  });
}


module.exports = sum
