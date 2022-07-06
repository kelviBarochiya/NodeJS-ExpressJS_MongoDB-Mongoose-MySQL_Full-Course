function closeFar(a, b, c){
    const far = function (x, y) {
        return (Math.abs(x - y) >= 2);
      };
    
      const close = function (x, y) {
        return Math.abs(x - y) <= 1;
      };
    
      if (close(a, b) && far(b, c) && far(a, c)) {
        return true;
      } else if (close(a, c) && far(b, c) && far(a, b)) {
        return true;
      }
    
      return false;
  }