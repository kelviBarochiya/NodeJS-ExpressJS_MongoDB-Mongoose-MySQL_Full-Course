function in1To10(n, outsideMode){
    if (outsideMode) {
        return (n <= 1 || n >= 10);
      }
      return (n >= 1 && n <= 10);
  }