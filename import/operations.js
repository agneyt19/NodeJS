export function square(n) {
  return n * n;
}

export function cube(n) {
  return n * n * n;
}

export function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}