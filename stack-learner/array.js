// const arr = [2,4,53,34]

//  arr.fill(false);
// console.log(arr.length)
// for(let i=0;i < arr.length;i++){
//     const rand = Math.floor(Math.random() *10+1);
    
//     arr[i] = rand > 5 ? 'X':'0';
// }
//console.log(arr);
 
/*Fedarrow 
const sum =(a,b) => a+b
const sub =(a,b) => a-b
const mul =(a,b) => a*b
const div =(a,b) => a/b
const mod =(a,b) => a%b

const funcs = [sum,sub,mul,div,mod]
const a=10,b=20
for(let i= 0;i<funcs.length;i++){
    const result = funcs[i](a,b)
    console.log('[${funcs[i].name}] result = ${result}')
}*/

const name1=['sumi','sumaiya','nur']
function update(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = (i+1). arr[i];
    }
}
update(name1)
console.log(name1)