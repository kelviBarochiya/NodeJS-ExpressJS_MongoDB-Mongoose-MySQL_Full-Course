function altPairs(str) {
  result = "";
  for (x = 0; x < str.length; x += 4) {
    last = x + 2;
    if (last > str.length) {
      last = str.length;
    }
    result = result + str.substring(x, last);
  }
  return result;
}
