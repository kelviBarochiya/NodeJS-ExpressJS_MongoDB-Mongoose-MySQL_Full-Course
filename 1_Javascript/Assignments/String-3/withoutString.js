function withoutString(base, remove){

    let rlen = remove.length;
  
    let res = "";
  
    for (let i = 0; i < base.length; i++){
      let subbie = base.substring(i, i+ rlen);
      if (subbie.toLowerCase() != remove.toLowerCase()) {
          if (base[i] == " " && res.charAt(res.length-1) == " "){
          }  else {
              res += base[i];
          }
      }  else {
        i += rlen-1;
      }
    }
    return res;
  }