function max1020(a, b) {
  const between1020 = function (num) {
    return num >= 10 && num <= 20;
  };

  let result = 0;

  if (between1020(a)) {
    result = a;
  }

  if (b > result && between1020(b)) {
    result = b;
  }

  return result;
}
