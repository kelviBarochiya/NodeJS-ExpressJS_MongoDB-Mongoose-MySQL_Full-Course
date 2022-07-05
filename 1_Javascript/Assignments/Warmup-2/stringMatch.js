function stringMatch(a, b) {
  len = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < len - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if (aSub == bSub) {
      count++;
    }
  }
  return count;
}
