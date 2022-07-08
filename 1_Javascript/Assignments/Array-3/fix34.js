function fix34(nums){
    let i = 0;
  
    while (i < nums.length && nums[i] != 3)
      i++;
  
    let j = i + 1;
  
    while (j < nums.length && nums[j] != 4)
      j++;
  
    while (i < nums.length) {
      if (nums[i] == 3) {
        let temp = nums[i + 1];
        nums[i + 1] = nums[j];
        nums[j] = temp;
  
        while (j < nums.length && nums[j] != 4)
          j++;
      }
      i++;
    }
  
    return nums;
  }