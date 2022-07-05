function stringSplosion(str) {
  result = "";
  for (stringSplosion = 0; stringSplosion < str.length - 1; stringSplosion++) {
    result = result + str.substring(0, stringSplosion + 1);
  }
  return result;
}
