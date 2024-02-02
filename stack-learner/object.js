const person = {
    firstname:'sumi',
    lastname:'sumaiya',
    id :101,
    mail:'sumi@gmail.com',
}
// Different types of object print
const key ='id';
console.log(person)
console.log(person.mail)
console.log(person[key])

// array of object
const person1 =[
    {name1:'sumi',id:101},
    {name1:'sami',id:102},
]
for(let p of person1){
    console.log(p.name1+ '  '+p.id);
}
//Object of array

const person2 = {
    name2:'sami',id:101,
    friends:['sumi','sumaiya','nur'],
}
console.log(person2.friends)
   
