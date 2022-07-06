function loneSum(a, b, c){
    let sum = 0;
      if (a != b && a != c) {
        sum += a;
      }
    
      if (b != c && b != a) {
        sum += b;
      }
    
      if (c != a && c != b) {
        sum += c;
      }
    
      return sum;
  }