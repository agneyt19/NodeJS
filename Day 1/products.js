
        const products = new Map();
products.set("TV", 40000);
products.set("Mobile", 27000);
products.set("Washing Machine", 35000);
products.set("Fan", 500);
products.set("AC", 30000);

products.forEach((price, name) => {
  console.log("product=" + name);
  console.log("Price=" + price);
  console.log(" ");
});

console.log("Items whose price is greater than 1000:");
products.forEach((price, name) => {
  if (price > 1000) {
    console.log(name + ": " + price);
  }
});
   