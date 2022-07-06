function seeColor(str){
    if (str.length >= 3 && str.substring(0, 3) == 'red') {
      return 'red';
    }
  
    if (str.length >= 4 && str.substring(0, 4) == 'blue') {
      return 'blue';
    }
  
    return '';
  }