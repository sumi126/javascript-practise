const normalPerson = {
    firstName : 'Imratuzzahan',
    lastName : 'Sumi',
    salery:15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    } ,
    chargBill:function(amount){
        this.salery = this.salery - amount;
        return this.salery;
    }
}
normalPerson.chargBill(500);
console.log(normalPerson.salery);