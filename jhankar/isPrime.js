// is input number prime?
function isPrime(num){
   for(let i = 2;i<num/2;i++){
    if(num % i == 0){
        console.log(num + " is not a Prime number");
        return ;
    }
   }
   console.log(num + " is a Prime number");
}
isPrime(8);

// prime number in n1 to n2 interval
function primeInterval(num1,num2){
    let flag = 0;
    for(let i =num1;i<=num2;i++){
        flag = 0;
        for(let j = 2;j<i/2;j++){
            if(i % j == 0){ 
                flag=1;
                console.log(i + " is not  a Prime number");
                break;
            } 
        }
        if(flag == 0){
            console.log(i + " is  a Prime number");
        } 
    }
}
primeInterval(8,20);