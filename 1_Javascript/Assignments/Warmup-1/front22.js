function front22(str) {
  n = 2;
  if (n > str.length) {
    n = str.length;
  }
  frist = str.substring(0, n);
  return frist + str + frist;
}
