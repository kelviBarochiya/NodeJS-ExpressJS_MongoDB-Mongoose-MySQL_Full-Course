function countCode(str){
    count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'c' && str[i+1] == 'o' && str[i+3] == 'e')
        {
            count++;
        }
    }
    return count;
}
