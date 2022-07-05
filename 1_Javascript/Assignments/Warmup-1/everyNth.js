function everyNth(str, n) {
  result = "";

  for (let t = 0; t < str.length; t = t + n) {
    result = result + str.charAt(t);
    // t =table like n equal to 3 so 0,3,6 .
  }

  return result;
}
