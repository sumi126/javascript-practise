//convert feet to mile
function feetToMile(feet){
    if(feet<0){
        console.log("Please enter a positive value")
        return;
    }
    return (feet * 0.0001894);
}
console.log(feetToMile(989875));

//how many wood is needed for chair =,table and bed where 1 ,3,5 cube wood is needed for respectively.
function woodCalculator(chair,table,bed){
    return chair*1 + table*3 + bed*5;
}
console.log(woodCalculator(3,5,2));

// calculate total break for a n'th floor building where >=10 floor is 15feet, 10<floor<20 is 12 feet and <20floor is 10 feet height. 1 feet = 1000 brick;
function brickCalculator(floor){
    let brick =0,count;
    if(floor>20){
        count = floor-20;
        brick =brick+  10000*count;
        floor -= count;
    }
    if(floor<=20 && floor>10){
        count = floor-10;
        brick = brick+ 12000*count;
        floor -= count;
    }
    if(floor<=10){
        brick = brick+ 15000*floor;
    }
    return brick;
}
console.log(brickCalculator(15))


//find small name in friendlist
function tinyFriend(names){
    let smallNameArray = [names[0]];
    let smallName = names[0],flag = 0;
    for(let i =1;i<names.length;i++){
        if(smallName.length >= names[i].length){            
            if(smallName.length == names[i].length){
                smallNameArray.push(names[i]);
                flag++;
            }
            else{
                smallName = names[i];
            }
       }      
    }
    if(flag==0) {
        return smallName ;  
    }
    else{
        return smallNameArray;
    }
}
console.log(tinyFriend(['sumi','sumaiya','mitu','kotha','saiba']));