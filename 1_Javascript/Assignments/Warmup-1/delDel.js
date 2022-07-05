function delDel(str) {
  if (str.length < 4) {
    return str;
  }

  let result = str;

  if (str.substring(1, 4) == "del") {
    result = str.substring(0, 1) + str.substring(4, str.length);
  }

  return result;
}
