let array = [9,8,7,8,9,6,5,5,4],uniqueElement=[];
for(let i =0;i<array.length;i++){
    if(uniqueElement.indexOf(array[i]) == -1){
        uniqueElement.push(array[i]);
    }
}
console.log(uniqueElement);
