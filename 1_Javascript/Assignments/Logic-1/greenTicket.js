function greenTicket(a, b, c){
    if (a == b && b == c) {
        return 20;
      }
    
      if (a == b || b == c || c == a) {
        return 10;
      }
    
      return 0;
  }