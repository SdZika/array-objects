/*Task:
- Convert productData into an array where each element is an object with properties: id, name, price, totalSales, and totalRevenue.
- Calculate totalSales (sum of monthlySales) and totalRevenue (totalSales * price) for each product.
- Determine which product had the highest totalSales.

Expected Output:
- Array of products with added totalSales and totalRevenue.
- ID of the best-selling product. 

Objective:
Transform product data from an object to an array.
Calculate total sales for each product.
Identify the product with the highest sales.

[
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
]*/

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

let arraySalesRevenue = [];
let monthlySalesbyProduct = 0;


for (key in productData) {

    if (!productData[key].monthlySales) {
        let monthlyNumber = productData[key].monthlySales;

    }
    
    



        for (let i = 0; i < monthlyNumber.length; i++) {
        
            monthlySalesbyProduct += monthlyNumber[i];
           
        }
 }
 //console.log(monthlySalesbyProduct);
 console.log(monthlyNumber);
