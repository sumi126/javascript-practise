function explain_callback(name,age,task){
    console.log("Hello "+ name);
    console.log("You are "+age);
    task();
}
function washHand(){
    console.log("You should wash hand after eating!");
}
function takeBath(){
    console.log("You should take bath !");
}
console.log(explain_callback("Sagor",23,washHand));
console.log(explain_callback("Sagorika",20,takeBath));

function addNumbers(num1,num2){
    console.log(arguments)
    return num1+num2;
}
console.log(addNumbers(4,6,7,7));

