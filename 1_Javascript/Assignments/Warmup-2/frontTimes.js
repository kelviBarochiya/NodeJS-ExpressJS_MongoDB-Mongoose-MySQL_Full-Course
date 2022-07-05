function frontTimes(str, n) {
  fristLength = 3;
  if (fristLength > str.length) {
    fristLength = str.length;
  }
  frist = str.substring(0, fristLength);
  result = "";
  for (x = 0; x < n; x++) {
    result = result + frist;
  }
  return result;
}
