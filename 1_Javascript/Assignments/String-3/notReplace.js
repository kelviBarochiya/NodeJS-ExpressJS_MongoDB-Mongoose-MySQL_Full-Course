function notReplace(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    /* using charAt here rather than bracket index, b/c bracket index shows undefined for chars at
        -1 index, causing error. charAt shows "", so no error*/
    if (
      str.charAt(i - 1).match(/[a-z]/i) ||
      (i + 2 < str.length && str.charAt(i + 2).match(/[a-z]/i))
    ) {
      result += str[i];
    } else if (str.substring(i, i + 2) == "is") {
      result += "is not";
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}
