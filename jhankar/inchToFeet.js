function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var n= [100,156,126,526];
var l = n.length;
while(l--){
    var inch = n[3-l];
     var feet = inchToFeet(inch);
    console.log(inch + " = "+feet);
   
}

    
