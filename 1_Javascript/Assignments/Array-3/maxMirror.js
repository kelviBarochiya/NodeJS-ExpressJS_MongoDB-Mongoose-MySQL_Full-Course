function maxMirror(nums) {

    function matchesForN(nums, n) {
      // initially lets solve for n=3, then we can generalise to any n
      // step1 get the candidates, which is [1,2,3] and [2,3,4] etc
      let candidates = [];
  
      for (let i = 0; i < nums.length - (n - 1); i++) {
        let candidate = nums.slice(i, i + n);
        candidates.push(candidate);
      }
  
      //step2. reverse nums. Since reverse() alters the array, prevent that by saving
      // reversed array in a variable.
      let rev_nums = nums.slice().reverse();
  
      let comparisons = [];
  
      //step3. make the copmarison arrays. like in candidates but reversed.
      for (let i = 0; i < rev_nums.length - (n - 1); i++) {
        let comparison = rev_nums.slice(i, i + n);
        comparisons.push(comparison);
      }
  
      let matches = []
      for (let candidate of candidates) {
        for (let comparison of comparisons) {
          match = isEqual(candidate, comparison.slice())
          if (match) {
            matches.push(candidate);
            break;
          }
        }
      }
  
      return matches;
  
    }
  
    //function we call to check if the sub-arrays are equal
    function isEqual(array1, array) {
      for (let i = 0, l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array[i] instanceof Array) {
          // recurse into the nested arrays
          if (!array1[i].equals(array[i]))
            return false;
        }
        else if (array1[i] != array[i]) {
          // Warning - two different object instances will never be equal: {x:20} != {x:20}
          return false;
        }
      }
      return true;
    }
  
    for (let n = nums.length; n >= 0; n--) {
      let matches = matchesForN(nums, n);
      if (matches.length) {
        return n;
      }
    }
  }