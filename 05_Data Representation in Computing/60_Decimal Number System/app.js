//digit to decimal reverse
function digitsToNumber(digit) {
  let mul = 1;
  let ans = 0;

  digit.forEach((digi) => {
    let num = digi * mul;
    mul *= 10;
    ans += num;
  });

  return ans;
}

console.log(digitsToNumber([1, 3, 4, 5, 7]));
