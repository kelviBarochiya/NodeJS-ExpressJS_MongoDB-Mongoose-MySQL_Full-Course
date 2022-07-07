function maxMod5(a, b){
    if (a == b) {
        return 0;
      }
    
      if (a % 5 == b % 5) {
        if (a < b) {
              return a;
        } else {
              return b;
        }
      }
      return a > b ? a : b;
  }