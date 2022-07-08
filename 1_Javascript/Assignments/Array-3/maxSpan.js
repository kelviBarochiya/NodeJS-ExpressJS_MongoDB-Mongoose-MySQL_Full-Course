function maxSpan(nums){
    let max = 0;
  
    for (let i = 0; i < nums.length; i++) {
      let j = nums.length - 1;
  
      while (nums[i] != nums[j]) {
        j--;
      }
  
      let span = j - i + 1;
  
      if (span > max)
        max = span;
    }
  
    return max;
  }