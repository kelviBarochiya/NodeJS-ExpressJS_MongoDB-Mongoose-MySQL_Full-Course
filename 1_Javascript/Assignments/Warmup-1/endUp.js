function endUp(str, beforethreeletter) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }

  beforethreeletter = str.length - 3;

  frist = str.substring(0, beforethreeletter);

  last = str.substring(beforethreeletter);

  return frist + last.toUpperCase();
}
