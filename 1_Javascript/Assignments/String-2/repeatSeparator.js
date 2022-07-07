function repeatSeparator(word, sep, count){
    let nu = "";
  
        if (count == 0){
          return "";
        }
  
  
      for (let i = 0; i < count - 1; i++){
          nu += word;
          nu += sep;
      }
  
      nu += word;
  
      return nu;
  }