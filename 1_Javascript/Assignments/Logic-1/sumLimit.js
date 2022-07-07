function sumLimit(a, b) {
  const aLen = Math.abs(a).toString().length;
  const bLen = Math.abs(b).toString().length;
  const res = a + b;
  const resLen = Math.abs(res).toString().length;

  if (resLen == aLen) {
    return res;
  } else if (resLen >= aLen) {
    return a;
  }
}
