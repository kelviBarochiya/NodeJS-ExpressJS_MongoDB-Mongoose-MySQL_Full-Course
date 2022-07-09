function strDist(str, sub){
    if (str.length <= sub.length){
           if (str == sub){
           return str.length;
         } else {
             return 0;
         }
     }
   
     if (str.substring(0, sub.length) == sub && str.substring(str.length-sub.length) == sub){
       return str.length;
     }
   
     if (str.substring(0, sub.length) == sub){
       return strDist(str.substring(0, str.length-1), sub);
     }
   
      if (str.substring(str.length-sub.length) == sub){
       return strDist(str.substring(1), sub);
     }
   
     return strDist(str.substring(1, str.length-1), sub)
  }