function bunnyEars(n){
    if(n==0)
    {
        return 0;
    }
    else if(n==1)
    {
        return 2;
    }
    else
    {
        return 2+bunnyEars(n-1);
    }
}