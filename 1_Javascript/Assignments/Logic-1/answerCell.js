function answerCell(isMorning, isMom, isAsleep){
    if (isAsleep) {
        return false;
      }
    
      if (isMorning && !isMom) {
        return false;
      }
    
      return true;
  }