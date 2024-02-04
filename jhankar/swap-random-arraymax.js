//swap without using temp
let x = 6,y = 7;
x = x+y;
y = x-y;
x = x-y;
console.log(x,y);

//random,round,ceil and floor
let a = Math.random();
let dise = 
console.log("a is:"+Math.ceil(a*6));
console.log("round of a is:"+Math.round(a));
console.log("ceil of a is:"+Math.ceil(a));
console.log("floor of a is:"+Math.floor(a));

//Array sum and max
let array =[5,1,3,5,6,7];
let max =array[0],sum = array[0];
for(let i = 1;i<array.length;i++){
    sum+=array[i];
    if(array[i]>max){
        max = array[i];
    }
}
console.log("Maximum value of array is: "+max);
console.log("The sum of array is: "+sum);