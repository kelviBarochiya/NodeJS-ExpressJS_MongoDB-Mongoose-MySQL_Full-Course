function xyBalance(str){
    let y = false;
      //backwards loop
      for(let i = str.length - 1; i >= 0; i--) {
          if(str.charAt(i) == 'y')
              y = true;
  
          if(str.charAt(i) == 'x' && !y)
              return false;
      }
  
      return true;
  }