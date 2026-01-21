function product(...nums) {
  return nums.reduce((curr, accu) => {
    return curr * accu;
  });
}

module.exports = product