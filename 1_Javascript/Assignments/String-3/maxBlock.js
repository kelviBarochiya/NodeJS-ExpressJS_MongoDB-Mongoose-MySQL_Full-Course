function maxBlock(str){
    let count = 0;
    let stick = 1;
  
    for (let i = 0; i < str.length; i++){
      if (i < str.length-1 && str[i] == str[i+1]){
        stick += 1;
      } else {
        stick = 1;
      }
  
      if (stick > count){
        count= stick;
      }
    }
  
    return count;
  
  }