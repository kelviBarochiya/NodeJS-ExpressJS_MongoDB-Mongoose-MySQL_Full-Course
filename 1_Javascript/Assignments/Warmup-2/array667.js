function array667(nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 6) {
      if (nums[x + 1] == 6 || nums[x + 1] == 7) {
        count++;
      }
    }
  }
  return count;
}
