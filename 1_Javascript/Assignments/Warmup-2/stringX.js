function stringX(str) {
  result = "";
  frist = str.substring(0, 1);
  last = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== "x") {
      result += str.charAt(i);
    }
  }
  return frist + result + last;
}
