function last2(str) {
  count = 0;
  if (str.length < 2) {
    return 0;
  }
  last = str.substring(str.length - 2);
  for (i = 0; i < str.length - 2; i++) {
    sub = str.substring(i, i + 2);
    if (sub == last) {
      count++;
    }
  }
  return count;
}
