function shareDigit(a, b){
    const aFirst = Math.floor(a / 10);
      const aLast = a % 10;
    
      if (aFirst == Math.floor(b / 10) || aFirst == b % 10) {
        return true;
      }
    
      if (aLast == Math.floor(b / 10) || aLast == b % 10) {
        return true;
      }
    
      return false;
  }