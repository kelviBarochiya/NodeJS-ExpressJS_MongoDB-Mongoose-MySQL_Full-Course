function countXX(str) {
  count = 0;
  for (xx = 0; xx < str.length; xx++) {
    if (str.charAt(xx) == "x") {
      if (str.charAt(xx + 1) == "x") {
        count++;
      }
    }
  }
  return count++;
}
