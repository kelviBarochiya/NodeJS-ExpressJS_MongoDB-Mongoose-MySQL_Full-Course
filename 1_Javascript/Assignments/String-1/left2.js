function left2(str){
    if (str.length > 1) {
      front = str.substring(0, 2);
      back = str.substring(2, str.length);
      return back + front;
    }
    return str;
  }