function changePi(str){
    if (str.length <= 0){
       return "";
     }
   
     if (str.substring(0, 2) == "pi"){
       return 3.14 + changePi(str.substring(2))
     } else {
       return str.charAt(0) + changePi(str.substring(1))
     }
  }