function makeTags(tag, word){
    const otag = `<${tag}>`;
    const ctag = `</${tag}>`;
    return otag + word + ctag;
  }