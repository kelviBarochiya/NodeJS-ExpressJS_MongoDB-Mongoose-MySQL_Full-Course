function midThree(nums){
    let x = Math.floor(nums.length / 2); // since 5/2 is 2.5, floor gives 2
    return nums.slice(x - 1, x + 2);
  }