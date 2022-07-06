function extraEnd(str){
    if (str.length > 1) {
      back = str.substring(str.length - 2);
      return back + back + back;
    }
  }