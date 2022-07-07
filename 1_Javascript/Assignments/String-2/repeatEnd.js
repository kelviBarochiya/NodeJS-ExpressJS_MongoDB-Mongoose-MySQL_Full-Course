function repeatEnd(str, n){
    let retStr = "";
    let sub = str.substring(str.length - n);
  
      while (n != 0) {
          retStr += sub;
          n--
      }
  
      return retStr;
  
  }