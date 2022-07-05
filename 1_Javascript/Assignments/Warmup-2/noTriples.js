function noTriples(nums) {
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if (first == nums[x + 1]) {
      if (first == nums[x + 2]) {
        return false;
      }
    }
  }
  return true;
}
