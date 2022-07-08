function maxEnd3(nums){
    let max = nums[0];
    if (nums[2] > nums[0]) {
      max = nums[2];
    }
    return [max, max, max];
  }