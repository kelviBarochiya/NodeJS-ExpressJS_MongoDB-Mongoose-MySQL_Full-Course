function lastChars(a, b){
    let res = '';
    if (a.length == 0) {
      res += '@';
    } else {
      res += a.charAt(0);
    }
  
    if (b.length == 0) {
      res += '@';
    } else {
      res += b.charAt(b.length - 1);
    }
  
    return res;
  }