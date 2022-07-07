function getSandwich(str){
    let temp1 = "";
    let i1 = 0;
      for (let i = 0; i < str.length; i++){
          if (str.slice(i, i+5) == "bread") {
              temp1 = str.slice(i, i+5);
              i1 = i+5;
              break;
          }
      }
    let temp2 = "";
    let i2 = 0;
      for (let i = str.length; i >= 0; i--){
          if (str.slice(i-5, i) == "bread") {
              temp2 = str.slice(i-5, i);
              i2 = i-5;
              break;
          }
      }
  
      let res = "";
  
      for (let j = i1; j < i2; j++){
          res += str[j];
      }
  
      return res;
  
  }