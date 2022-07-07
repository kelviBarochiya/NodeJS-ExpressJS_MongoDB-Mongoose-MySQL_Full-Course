function cigarParty(cigars, isWeekend){
    if (isWeekend) {
        return cigars >= 40;
      }
      return cigars >= 40 && cigars <= 60;
  }