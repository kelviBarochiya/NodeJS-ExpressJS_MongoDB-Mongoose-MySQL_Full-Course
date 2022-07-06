function noTeenSum(a, b, c){
    const fixTeen = function (n) {
        if (n >= 13 && n <= 19 && n != 15 && n != 16) {
          return 0;
        }
    
        return n;
      };
      return fixTeen(a) + fixTeen(b) + fixTeen(c);
  }