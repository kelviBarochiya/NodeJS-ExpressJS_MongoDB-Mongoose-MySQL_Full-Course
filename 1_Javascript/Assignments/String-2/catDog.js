function catDog(str) {
    let cat = 0;
    let dog = 0;
  
    for (let i = 0; i < str.length; i++) {
        if(str.substring(i, i+3) == "cat") {
            cat += 1;
        }
          if(str.substring(i, i+3) == "dog") {
            dog += 1;
            }
  
      }
      return cat == dog;
  }
    
  