function stringYak(str) {
  result = "";
  for (x = 0; x < str.length; x++) {
    if (
      x + 2 < str.length &&
      str.charAt(x) == "y" &&
      str.charAt(x + 2) == "k"
    ) {
      x = x + 2;
    } else {
      result = result + str.charAt(x);
    }
  }
  return result;
}
