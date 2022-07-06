function makeChocolate(small, big, goal) {
  if (small + big * 5 < goal) {
    return -1;
  }

  const bigsNeeded = Math.floor(goal / 5);

  const bigsUsed = Math.min(big, bigsNeeded);
  // how many leftover
  const smallsNeeded = goal - bigsUsed * 5;

  return smallsNeeded;
}
