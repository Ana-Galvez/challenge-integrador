const fs = require("fs");

let data = fs.readFileSync("./products.json");
let products = JSON.parse(data);
// console.log(products);

module.exports = products;