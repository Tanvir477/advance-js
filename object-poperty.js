const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Mannaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 71, name: "deepJol"}
];

// const output=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;

//     output.push(result);
    
// }
// console.log(output);


const names = students.map(s=> s.name);
const ids = students.map(s=> s.id);
const bigger= students.filter(s=> s.id>40)
console.log(ids);
console.log(names);
console.log(bigger);
