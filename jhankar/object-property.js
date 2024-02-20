const students = [
    {id:105, name:'samu'},
    {id:106, name:'sumu'},
    {id:125, name:'sumi'},
    {id:115, name:'samsu'},
];
const nams = students.map(s => s.name);
const ids = students.map(s => s.id);
const filterName = students.filter(s => s.id > 106);
const names = students.find(s => s.id>106);
console.log(`${nams},
${ids},`);
console.log(filterName,names);