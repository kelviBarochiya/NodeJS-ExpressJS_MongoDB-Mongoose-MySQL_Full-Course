function blackjack(a, b){
    if (a > 21 && b > 21) {
        return 0;
      }
    
      const big = Math.max(a, b);
      const small = Math.min(a, b);
    
      if (big <= 21) {
        return big;
      } else if (small <= 21) {
        return small;
      }
  }