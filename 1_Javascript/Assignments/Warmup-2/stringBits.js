function stringBits(str) {
  result = "";
  for (x = 0; x < str.length; x += 2) {
    result = result + str.substring(x, x + 1);
  }
  return result;
}
