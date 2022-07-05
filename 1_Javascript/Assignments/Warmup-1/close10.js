function close10(a, b) {
  adiffrence = Math.abs(a - 10);
  bdiffrence = Math.abs(b - 10);

  if (adiffrence < bdiffrence) {
    return a;
  }
  if (bdiffrence < adiffrence) {
    return b;
  }
  return 0;
}
