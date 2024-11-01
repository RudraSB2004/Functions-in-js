// /Q6. Curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

// Example function to be curried
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(3)(4)); // Output: 7
console.log(curriedAdd(5, 6)); // Output: 11
