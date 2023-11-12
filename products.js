const fs = require("fs");

let data = fs.readFileSync("./products.json");
let products = JSON.parse(data);

module.exports = products;