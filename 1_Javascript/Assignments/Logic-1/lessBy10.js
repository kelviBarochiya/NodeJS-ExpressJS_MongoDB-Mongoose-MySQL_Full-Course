function lessBy10(a, b, c){
    return Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(c - a) >= 10;
  }