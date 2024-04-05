/* input [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }]
output { '20': ['Amy'], '25': ['John', 'cam'] } */

const arrayOfObjects = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }];
let newObject = {};

for (let i = 0; i < arrayOfObjects.length; i++) {
    
        let personAge = arrayOfObjects[i].age;
        let personName = arrayOfObjects[i].name;
      
        if (newObject[personAge] === undefined) {
        newObject[personAge] = []; //this is how to make new array in object
        }

        newObject[personAge].push(personName);
            
}
console.log(newObject);