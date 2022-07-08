function sameFirstLast(nums) {
  let end = nums.length - 1;
  if (nums.length >= 1 && nums[0] == nums[end]) {
    return true;
  } else {
    return false;
  }
}
