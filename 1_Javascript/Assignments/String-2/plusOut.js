function plusOut(str, word){
    let slen = str.length;
    let wlen = word.length;
    let fin = "";
  
    for (let i = 0; i < slen; i++) {
      if (i <= slen - wlen) {
        let tmp = str.substring(i,i+wlen);
        if (tmp == word) {
          fin += word;
          i += wlen-1;
        }
        else
          fin += "+";
      }
      else
        fin += "+";
    }
    return fin;
  }