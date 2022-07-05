function stringEcount(str){
  count = 0;

  for (let r = 0; r < str.length; r++) {
    if (str.charAt(r) == "e") {
      count++;
    }
  }

  return count >= 1 && count <= 3;
}
