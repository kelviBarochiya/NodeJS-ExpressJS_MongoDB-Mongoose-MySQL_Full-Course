function squareUp(n){
  let subArray = [];
  let j = n;
  while (j > 0) {
    subArray.push(0);
    j--;
  }

  let output = [];

  for (let i = n - 1; i >= 0; i--) {
    subArray.splice(i, 1, n - i);
    output = output.concat(subArray);
  }
  return output;
}