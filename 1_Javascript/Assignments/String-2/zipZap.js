let nust = "";
  for (let i = 0; i < str.length; i++){
    if (str[i-1] != "z" || str[i+1] != "p"){
      nust += str[i];
    }
  }
  return nust;