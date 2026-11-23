
        const accounts = new Map();
accounts.set("Rahul", 45000);
accounts.set("Priya", 82000);
accounts.set("Amit", 15000);
accounts.set("Sneha", 67000);
accounts.set("Kiran", 30000);

let highest = ["", 0];

accounts.forEach((name,balance) => {
  if (balance > highest[1]) {
    highest = [name, balance];
  }
});

console.log("Account holder: " + highest[0]);
console.log("Highest balance: " + highest[1]);
  