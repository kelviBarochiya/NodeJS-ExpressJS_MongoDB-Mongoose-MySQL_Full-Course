function withoutDoubles(die1, die2, noDoubles){
    if (noDoubles) {
       if (die1 == die2) {
         if (die1 == 6 || die2 == 6) {
           die1 = 1;
           return die1 + die2;
         }
         return die1 + die2 + 1;
       }
     }
     return die1 + die2;
 }