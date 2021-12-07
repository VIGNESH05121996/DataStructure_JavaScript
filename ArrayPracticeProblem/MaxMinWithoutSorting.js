//Given to generate 10 random 3 digit num and storing in array
var arr=[];
for(i=0;i<=9;i++) //array index starts with zero and 10th index is 9
{
   arr[i]=Math.floor(Math.random()*90)+100; //random number
}
console.log("arr[i]="+arr);

//To find Second Largest and Second Smallest Number without sorting
var secondMax = function (arr) {     
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};
var secondMaximum = secondMax(arr);
console.log("Second Maximum Number: "+secondMaximum);

var secondMin = function (arr) {     
    var min = Math.min.apply(null, arr); // get the min of the array
    arr.splice(arr.indexOf(min), 1); // remove min from the array
    return Math.min.apply(null, arr); // get the 2nd min
};
var secondMinimum = secondMin(arr);
console.log("Second Minimum Number: "+secondMinimum);

