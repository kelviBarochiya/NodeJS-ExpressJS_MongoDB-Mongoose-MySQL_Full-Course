function mapAB(someMap){
    if (someMap.has("a") && someMap.has("b")) {
      let combinedString = someMap.get("a") + someMap.get("b");
      someMap.set("ab", combinedString);
    }
    return someMap;
  }