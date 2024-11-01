//Q4. Tax calculation function using closures
function calculateTax(income) {
  const getTaxRate = () => {
    if (income <= 30000) return 0.1;
    else if (income <= 70000) return 0.2;
    else return 0.3;
  };

  const taxRate = getTaxRate();
  return income * taxRate;
}

// Test cases
console.log(calculateTax(25000)); // Output: 2500 (10% of 25000)
console.log(calculateTax(50000)); // Output: 10000 (20% of 50000)
console.log(calculateTax(100000)); // Output: 30000 (30% of 100000)
