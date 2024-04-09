const students = [
    { name: "John Doe", grade: "A" },
    { name: "Jane Smith", grade: "B" },
    { name: "Emily Jones", grade: "A" },
    { name: "William Brown", grade: "C" },
    { name: "Grace Davis", grade: "B" }
];
/*{
    A: ["John Doe", "Emily Jones"],
    B: ["Jane Smith", "Grace Davis"],
    C: ["William Brown"]
}*/

let newObject = {};

for ( let i = 0; i < students.length; i++) {
    let student = students[i];
    if (newObject[student.grade] === undefined) {
        newObject[student.grade] = [];
    }
        newObject[student.grade].push(student.name);
    
}

console.log(newObject);