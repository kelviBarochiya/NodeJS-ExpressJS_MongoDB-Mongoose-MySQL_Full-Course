function prefixAgain(str, n) {
    let prefix = str.substring(0, n);

    for (let i = str.length; i > n; i--){
        if(str.substring(i-n, i) == prefix) {
            return true;
        }
    }
    return false;
}