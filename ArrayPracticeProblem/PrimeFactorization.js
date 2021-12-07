//Factors of Number using prime factorization and store in array
let n=235;
let arr=new Array();
for(i=2;i<=n;i++)
{
    if(n%i == 0)
    {
        isPrime=1;
        for(j=2;j<=i/2;j++)
        {
            if(i%j == 0)
            {
               isPrime=0;
            }
        }
        if(isPrime == 1)
        {
            arr.push(i);
        }
        
    }
}
console.log("Prime Factors Array=",arr);
