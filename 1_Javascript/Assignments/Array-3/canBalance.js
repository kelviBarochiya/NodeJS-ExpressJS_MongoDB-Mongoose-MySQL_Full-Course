function canBalance(nums){
    let first = 0;
    let second = 0;
  
    for (let i = 0; i < nums.length; i++) {
      second += nums[i]; //adding all nums together
    }
  
    for (let i = 0; i <= nums.length - 2; i++) {
      first += nums[i];
      second -= nums[i];
  
      if (first == second) {
        return true;
      }
    }
  
    return false;
  }