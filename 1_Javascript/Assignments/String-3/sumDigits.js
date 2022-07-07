function sumDigits(str){
    sum = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] >= 1 && str[i] <= 9)
        {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}