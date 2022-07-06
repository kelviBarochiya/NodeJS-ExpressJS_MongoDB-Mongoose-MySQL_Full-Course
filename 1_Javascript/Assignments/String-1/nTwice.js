function nTwice(str, n){
    first = str.substring(0, n);
    end = str.substring(str.length - n);
    return first + end;
  }