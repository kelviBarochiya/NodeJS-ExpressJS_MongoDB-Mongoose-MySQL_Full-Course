function mirrorEnds(string){
    let result = "";
  
      for (let i = 0; i < string.length; i++) {
        if (string[i] == string[string.length - i - 1]) {
          result += string[i]
        } else {
          break;
        }
      }
  
      return result;
  }