function countHi2(str){
    if (str.length <= 1){
    return 0;
  }

  if (str.substring(0, 3) == "xhi"){
    return countHi2(str.substring(3))
  }

  if (str.substring(0, 2) == "hi"){
     return 1 + countHi2(str.substring(2))
  }

   return countHi2(str.substring(1))
}