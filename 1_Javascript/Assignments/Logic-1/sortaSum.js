function sortaSum(a, b){
    const res = a + b;
      if (res >= 10 && res <= 19) {
        return 20;
      }
      return res;
  }