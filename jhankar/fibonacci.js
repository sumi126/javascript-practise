function fibonacci(n){
    let fibo =[0,1];
    for(let i = 2;i<n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let result = fibonacci(5);
console.log(result);

//fibonacci nth value recursive way
function fibonacciRecursive(n){
    if(n==0){
        return 0;
    }
    else  if(n ==1){
        return 1;
    }
    else{
        return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
    }
}
console.log(fibonacciRecursive(5));
var n = 8;
//fibonacci sequence recursive way
function fibonacciSeries(n){
    if (n == 0){
        return [0];
    }
    else  if (n == 1){
        return [0,1];
    }
    else{
        var fibo = fibonacciSeries(n-1) ;
         var i= fibo[n-1] +fibo[n-2];
         fibo.push(i);
         return fibo;
    }
}
console.log(fibonacciSeries(n));
