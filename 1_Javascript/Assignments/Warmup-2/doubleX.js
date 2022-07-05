function doubleX(str) {
  //str.toLowerCase();
  x = str.indexOf("x");
  if (x == -1) {
    return false;
  }
  /*if (x >= str.length) {
      return false;
    }*/
  return str.substring(x + 1, x + 2) == "x";
}
