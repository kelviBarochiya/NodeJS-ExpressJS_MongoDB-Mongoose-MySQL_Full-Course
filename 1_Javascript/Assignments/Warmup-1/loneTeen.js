function loneTeen(a, b) {
  const isTeen = function (num) {
    return num >= 13 && num <= 19;
  };
  const isTeenA = isTeen(a);
  const isTeenB = isTeen(b);
  return (isTeenA && !isTeenB) || (!isTeenA && isTeenB);
}
