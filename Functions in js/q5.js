//Q5. Recursive factorial function
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Test cases
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1
