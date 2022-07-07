function bobThere(str){
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == "b" && str.charAt(i+2) == "b"){
            return true;
        }
    }
      return false;
  }
  let a = bobThere('abcbob');
let b = bobThere('b9b');
let c = bobThere('bac');

console.log(a);
console.log(b);
console.log(c);