function startOz(str) {
  result = "";

  if (str.length >= 1 && str.charAt(0) == "o") {
    result += str.charAt(0);
  }

  if (str.length >= 2 && str.charAt(1) == "z") {
    result += str.charAt(1);
  }

  return result;
}
