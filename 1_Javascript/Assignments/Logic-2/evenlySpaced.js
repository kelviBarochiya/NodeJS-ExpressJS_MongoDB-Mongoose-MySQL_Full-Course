function evenlySpaced(a, b, c){
    const max = Math.max(a, b, c);
      const min = Math.min(a, b, c);
      const mid = a + b + c - max - min;
    
      return max - mid == mid - min;
  }