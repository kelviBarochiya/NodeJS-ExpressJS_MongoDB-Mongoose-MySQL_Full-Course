function swapEnds(nums){
    if (nums.length < 2) {
      return nums;
    }
  
    let toStart = nums.pop();
    let toEnd = nums.shift()
  
    nums.unshift(toStart);
    nums.push(toEnd);
  
    return nums;
  }