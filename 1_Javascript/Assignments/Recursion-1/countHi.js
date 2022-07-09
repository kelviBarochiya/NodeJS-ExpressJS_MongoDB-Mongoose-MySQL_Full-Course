function countHi(str){
    let count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'h' && str[i+1] == 'i')
        {
            count++
        }
    }
    return count;
}
