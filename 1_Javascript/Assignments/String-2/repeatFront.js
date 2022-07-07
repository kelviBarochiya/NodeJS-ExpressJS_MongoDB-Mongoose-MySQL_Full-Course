function repeatFront(str, n){
    let nu = "";
 
     for (let i = n; i > 0; i--){
         nu += str.substring(0, i);
     }
 
     return nu;
 }