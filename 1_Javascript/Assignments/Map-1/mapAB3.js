function mapAB3(someMap){
    if (someMap.has("a") && !someMap.has("b")) {
      someMap.set("b", someMap.get("a"));
    }
    else if (!someMap.has("a") && someMap.has("b")) {
      someMap.set("a", someMap.get("b"));
    }
    return someMap;
  }