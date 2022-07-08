function countClumps(nums) {
    let yardStick = -1;
    let clumps = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i + 1] && nums[i] != yardStick) {
        clumps += 1;
        yardStick = nums[i];
      } else {
        if (nums[i] != yardStick) {
          yardStick = -1
        }
      };
    }
    return clumps;
  }