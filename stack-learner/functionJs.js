
//find max
const arr1 =[1,3,4,2,6,4,9,34]
const arr2 = [6,35,54,35,25,4]

let max = arr1[0];
for(let v of arr1){
    if(v>max){
        max = v;
    }
}
//console.log(max);
function findmax(arr){
    let max = arr[0];
for(let v of arr){
    if(v>max){
        max = v;
    }
}
return max;
}
const r1 =findmax(arr1)
const r2 =findmax(arr2)

//console.log(r1,r2)


// inner funcition
function tablerow(n){
    const isOdd = (n) => n%2 !=0;
    const isEven = (n) => n%2 ==0;
   for(let i =0;i<n;i++){
        if(isOdd(i)){
          // console.log('Odd '+i)
        }
        else if(isEven(i)){
               // console.log('Even '+i)
        }
   }
}
tablerow(5);

// call back function

function toUpper(str,cb){
    const upper = str.toUpperCase();
    cb(upper);
}
toUpper('sumi',tr=>{
    console.log('Uppercase ',tr)
})
console.log(arr1.length);