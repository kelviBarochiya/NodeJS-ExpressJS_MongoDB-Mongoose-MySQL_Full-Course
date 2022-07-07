function oneTwo(str){
    let nust = "";
  
      for (let i = 0; i < str.length-1; i+= 3){
          if (str[i+2] != undefined){
            nust += str[i+1]; //c
            nust += str[i+2]; //b
            nust += str[i]; //a
          }
    }
      return nust;
  }