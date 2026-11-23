  const rectangle = {
  l: 10,
  b: 5,
  area() {
    return this.l * this.b;
  },
  perimeter() {
    return 2 * (this.l + this.b);
  }
};

console.log("area",rectangle.area());      
console.log("perimeter",rectangle.perimeter()); 
   