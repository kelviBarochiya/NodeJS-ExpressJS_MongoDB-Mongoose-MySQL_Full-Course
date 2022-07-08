function makeLast(nums) {
  let newLength = nums.length * 2;
  let newArray = [];
  for (let i = 0; i < newLength; i++) {
    newArray[i] = 0;
  }
  newArray[newLength - 1] = nums[nums.length - 1];
  return newArray;
}
