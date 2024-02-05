let sentence = "I am a good   girl. I want to become e web developer as soon as possible";
let count = 1;
for(let i=0;i<sentence.length;i++){
    if(sentence[i] == " " && sentence[i-1] != " "){
        count++;
    }
}
console.log(count,sentence.length);

//using buildin function
let word = sentence.split(/\s+/);
console.log(word.length);

//revers 
function reversString(str){
    let revers = " ";
    for(let i = 0;i<str.length;i++){
        revers = str[i] + revers;
    }
    return revers;
}
console.log(reversString(sentence));