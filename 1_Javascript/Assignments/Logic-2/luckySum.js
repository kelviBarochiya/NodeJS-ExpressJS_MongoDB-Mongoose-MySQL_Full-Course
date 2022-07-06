function luckySum(a, b, c){
    let sum = 0;
      const arr = [a, b, c];
    
      for (let i = 0; i <= 2; i++) {
        if (arr[i] != 13) {
          sum += arr[i];
        } else {
          return sum;
        }
      }
      return sum;
  }