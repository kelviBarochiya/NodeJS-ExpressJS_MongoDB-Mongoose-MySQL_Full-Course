function starBit(str){
    if (str.charAt(0) == "-" && str.charAt(str.length - 1) == "*"){
       return str;
     }
   
     if (str.charAt(str.length-1) == "*"){
       return starBit(str.substring(1));
     }
   
     if (str.charAt(0) == "-"){
       return starBit(str.substring(0, str.length-1));
     }
   
     return starBit(str.substring(1, str.length - 1));
  }