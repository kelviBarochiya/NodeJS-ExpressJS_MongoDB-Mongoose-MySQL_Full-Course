function wordEnds(str, word){
    let slen = str.length;
    let wlen = word.length;
    let res = "";
  
    if (slen.length < 1){
      return str;
    }
  
    for (let i = 0; i < slen; i++) {
      if (i <= slen - wlen){
        let temp = str.substring(i, i+wlen);
        if (temp == word){
          if (str[i-1] != undefined) {
            res += str[i-1];
          }
          if (str[i+wlen]){
            res+= str[i+wlen];
          }
          i += wlen-1;
        } else {
  
        }
      } else {
  
      }
    }
    return res;
  }