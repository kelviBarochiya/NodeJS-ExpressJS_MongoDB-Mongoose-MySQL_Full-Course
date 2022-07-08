function seriesUp(n){
    let modArr = [];
  
    for (let i = 0; i < n; i++) {
      let j = i;
      let x = 1;
      while (j >= 0) {
        modArr.push(x);
        x += 1;
        j--;
      }
      x = 1;
    }
    return modArr;
  }