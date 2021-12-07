//to show sum of 3 integer adds to zero
function sum()
{
    let arr=[2 , -3 , 1]
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            for(k=j+1;k<arr.length;k++)
            {
              sumOfIntegers=arr[i]+arr[j]+arr[k];
            }
        }
    }
    console.log(sumOfIntegers);
}
sum();
