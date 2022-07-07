function endOther(a, b){
    let short = "";
    let long = "";
  
      if (a == b) {
          return true;
      }
  
      if (a.length < b.length){
          short += a.toLowerCase();
          long += b.toLowerCase();
      } else {
          short += b.toLowerCase();
          long += a.toLowerCase();
      }
  
      let longEnd = long.substring(long.length -short.length);
  
      return longEnd == short;
  }