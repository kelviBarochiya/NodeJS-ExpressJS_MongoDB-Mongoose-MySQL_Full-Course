function blueTicket(a, b, c){
    if (a + b == 10 || b + c == 10 || a + c == 10) {
        return 10;
      }
    
      if (a + b == b + c + 10 || a + b == c + a + 10) {
        return 5;
      }
    
      return 0;
  }