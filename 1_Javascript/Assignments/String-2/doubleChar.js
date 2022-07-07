function doubleChar(str){
    let dStr = "";
  
    for (let i = 0; i < str.length; i++){
        dStr += str[i]+str[i];
    }
    return dStr;
  }