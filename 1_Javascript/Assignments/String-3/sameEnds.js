function sameEnds(nums, len){
    let front = nums.slice(0, len);
    let end = nums.slice(nums.length - len);
  
    return front.toString() == end.toString();
  }