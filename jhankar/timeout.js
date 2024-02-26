function display(){
    console.log(3333);
}
setTimeout(display,100);
console.log(1111);
console.log(2222);
setTimeout(function(){
    console.log(5555);
},30)
console.log(4444);
setTimeout(  num => console.log('Display after 70 ms' ,num),70,6666);
