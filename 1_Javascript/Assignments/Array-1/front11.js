function front11(a, b) {
  let sections = [a, b];

  let newA = [];

  for (let section of sections) {
    if (section.length == 0) {
    } else {
      newA.push(section[0]);
    }
  }

  return newA;
}
