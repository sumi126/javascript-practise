class Varsity{
    constructor(){
        this.VarsityName = "University of Rajshahi";
    }
}
// inheritence 
class students extends Varsity{
    constructor(sId, sName){
        super();
        this.id = sId;
        this.name = sName ;
        this.college = "Sherpur govt college"
    }
}
const student1 = new students(1,"Sumi");
const student2 = new students(5,"Sami");

console.log(student1.name,student1.id,student1.college);
console.log(student1);

//function in class
class FunctionClass extends Varsity{
    constructor(){
        super();
        this.firstName = "Imratuzzhan";
        this.lastName = "Sumi";
    }
    getFullName(){
        return this.firstName + " "+ this.lastName +" " + this.VarsityName;
    }
}
const printName = new FunctionClass();
console.log(printName.getFullName());