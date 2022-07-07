function xyzThere(str){
    let x = "xyz";
    for (let i = 0; i < str.length; i++){
      if(str.substring(i, i+3) == x && str.charAt(i-1, i) != "."){
          return true;
      }
    }
      return false;
  }