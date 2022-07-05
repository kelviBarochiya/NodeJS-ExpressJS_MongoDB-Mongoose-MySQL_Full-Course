function mixStart(str) {
  if (str.length < 3) {
    return false;
  }

  two = str.substring(1, 3);

  if (two == "ix") {
    return true;
  } else {
    return false;
  }
}
