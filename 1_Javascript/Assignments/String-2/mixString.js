function mixString(a, b){
    let large = "";
     let newStr = "";
 
     if (a.length > b.length) {
         large += a.length;
     } else {
         large += b.length;
     }
 
     for (let i = 0; i < large; i++) {
         if (a[i] != undefined) {
           newStr += a[i];
         }
         if (b[i] != undefined){
             newStr += b[i];
         }
     }
 
     return newStr;
 }