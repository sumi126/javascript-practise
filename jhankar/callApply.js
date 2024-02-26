const normalPerson = {
    firstName : 'Imratuzzahan',
    lastName : 'Sumi',
    salary:15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    } ,
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(500);
const friendlyPersion = {
    firstName : "Fatema",
    lastName : "Kotha",
    salary : 34000
}
//normalPerson.chargeBill(4000);
const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPersion);
console.log(friendlyChargeBill(4000));

//same process by call function
normalPerson.chargeBill.call(friendlyPersion,500);
console.log(friendlyPersion.salary);

normalPerson.chargeBill.apply(friendlyPersion,[500]);
console.log(friendlyPersion.salary);
