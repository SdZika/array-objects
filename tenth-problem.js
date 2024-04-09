/*Objective:
Transform product data from an object to an array.
Calculate total sales for each product.
Identify the product with the highest sales.

output = [
  {
    id: 'p001',
    name: 'Product 1',
    price: 20,
    totalSales: 125,
    totalRevenue: 2500
  },
  {
    id: 'p002',
    name: 'Product 2',
    price: 15,
    totalSales: 150,
    totalRevenue: 2250
  },
  {
    id: 'p003',
    name: 'Product 3',
    price: 25,
    totalSales: 55,
    totalRevenue: 1375
  }
];*/

const productData = {
    "p001": {
        name: "Product 1",
        price: 20,
        monthlySales: [30, 25, 40, 20, 10]
    },
    "p002": {
        name: "Product 2",
        price: 15,
        monthlySales: [35, 20, 45, 17, 33]
    },
    "p003": {
        name: "Product 3",
        price: 25,
        monthlySales: [10, 12, 10, 11, 12]
    }
};

let totalSales = 0;
let totalRevenue = 0;
let newArray = [];
let hiestSale = 0;

for (key in productData) {
    
    if (productData[key] !== undefined) {
        let products = productData[key]
        //console.log(products); print all three objects 
            for (let i = 0; i < products.monthlySales.length; i++) {
                totalSales += products.monthlySales[i];
            }
            //console.log(totalSales); print sum of monthly sale of each product
            totalRevenue = totalSales * products.price;
            //console.log(totalRevenue); prints totalRevenu by products

            newArray.push({
                id: key,
                name: products.name,
                price: products.price,
                totalSales: totalSales,
                totalRevenue: totalRevenue
            })

            if(hiestSale < totalRevenue) {
                hiestSale = totalRevenue;
            }
        }
}

console.log(newArray);
console.log("hiest sail is:", hiestSale);