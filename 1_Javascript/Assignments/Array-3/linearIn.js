function linearIn(outer, inner){
    let j = 0;
  
    for (let i = 0; i < outer.length; i++) {
      if (inner[j] == outer[i]) {
        j++;
      }
    }
  
    return j == inner.length;
  
  }
  