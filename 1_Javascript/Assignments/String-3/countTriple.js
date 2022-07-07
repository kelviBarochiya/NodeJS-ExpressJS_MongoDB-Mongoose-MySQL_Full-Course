function countTriple(str){
    count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == str[i-1] && str[i] == str[i+1])
        {
            count++;
        }
    }
    return count;


}