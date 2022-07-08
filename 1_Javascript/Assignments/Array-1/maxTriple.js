function maxTriple(nums) {
  let mid = Math.floor(nums.length / 2);
  let start = nums[0];
  let end = nums[nums.length - 1];

  if (nums[mid] > start && nums[mid] > end) {
    return nums[mid];
  } else if (start > nums[mid] && start > end) {
    return start;
  } else {
    return end;
  }
}
