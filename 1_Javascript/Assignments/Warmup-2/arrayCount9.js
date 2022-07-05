function arrayCount9(nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 9) {
      count++;
    }
  }
  return count;
}
