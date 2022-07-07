function sumNumbers(str){
    let len = str.length;
    let temp = "";
    let sum = 0;
  
    for (let i = 0; i < str.length; i++){
      if (parseInt(str[i])){
        if (i < len-1 && parseInt(str[i+1])){
          temp+= str[i]
        } else {
          temp+= str[i]
          sum += parseInt(temp);
          temp="";
        }
      }
    }
    return sum;
  }