function minCat(a, b){
    const min = Math.min(a.length, b.length);
  
    return a.substring(a.length - min) + b.substring(b.length - min);
  }