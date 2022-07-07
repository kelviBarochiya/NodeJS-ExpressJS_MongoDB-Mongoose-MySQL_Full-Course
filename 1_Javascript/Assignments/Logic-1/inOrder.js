function inOrder(a, b, c, bOk){
    if (bOk) {
        return c > b;
      }
      return b > a && c > b;
  }