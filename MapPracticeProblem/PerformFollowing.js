//a.Roll a die and find number between 1 to 6
//b.repeat for some times
//c.storing it in dictionary
let dict=new Map();
for(i=0;i<10;i++)
{
   let dice=Math.floor(Math.random()*6)+1;
   dict.set(i,dice);
}
console.log(dict);
