function right2(str){
    if (str.length > 1) {
      back = str.substring(str.length - 2, str.length);
      front = str.substring(0, str.length - 2);
      return back + front;
    }
    return str;
  }