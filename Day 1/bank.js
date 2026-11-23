
       function createAcc(n, b) {
  return {
    deposit(a) {
      b += a;
      console.log("Deposited: " + a);
    },

    withdrawal(a) {
      if (a > b) {
        console.log("Insufficient balance");
      } else {
        b -= a;
        console.log("Withdrawn: " + a);
      }
    },

    checkbalance() {
      console.log(n + "'s balance: " + b);
    }
  };
}

const acc = createAcc("Rahul", 10000);

acc.checkbalance();
acc.deposit(5000);
acc.withdrawal(3000);
acc.withdrawal(50000);
acc.checkbalance();
  