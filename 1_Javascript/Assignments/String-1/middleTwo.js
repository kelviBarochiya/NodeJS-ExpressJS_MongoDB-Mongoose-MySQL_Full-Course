function middleTwo(str){
    if (str.length % 2 == 0) {
      temp = str.substring(str.length);
      mid = temp.substring(0, 2);
      return mid;
    }
    return str;
  }