function firstLast6(nums){
    let end = nums.length - 1;
    if (nums.length > 0 && (nums[0] == 6 || nums[end] == 6)) {
      return true;
    } else {
      return false;
    }
  }