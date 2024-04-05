/* input [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }]
output [{ item: 'Apple', quantity: 2 }, { item: 'Banana', quantity: 4 }, { item: 'Apple', quantity: 1 }] */

const brandAndModels = [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }];
let itemsArray = []; //why did we make this empty array?

let resultArray = [];





for (let i = 0; i < brandAndModels.length; i++) {
    let brandName = brandAndModels[i].brand;

    
    console.log(brandName);

    if (itemsArray[brandName]) {
        itemsArray[brandName]++ 
    } else {
        itemsArray[brandName] = 1;
    }
    console.log(itemsArray);
    console.log(itemsArray[brandName]);
}

for (key in itemsArray) {
    resultArray.push({
        item: key,
        quantity: itemsArray[key]
    })
}

console.log(resultArray);
