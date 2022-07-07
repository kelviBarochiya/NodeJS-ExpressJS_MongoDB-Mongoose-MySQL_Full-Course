function lastDigit(a, b, c){
    return a % 10 == b % 10 || b % 10 == c % 10 || a % 10 == c;
  }