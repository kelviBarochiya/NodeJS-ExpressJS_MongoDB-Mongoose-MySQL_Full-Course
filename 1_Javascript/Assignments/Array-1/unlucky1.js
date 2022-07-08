function unlucky1(nums){
    let sections = [
      nums.slice(-2),
      nums.slice(0, 3)
    ]
  
    for (let section of sections) {
      for (let i = 0; i < section.length; i++) {
        if (section[i] == 1 && section[i + 1] == 3)
          return true;
      }
    }
    return false;
  }