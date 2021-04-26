// memoization
// hash map
// js object , keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.time('fib(6)')
console.log(fib(6));    //  8
console.timeEnd('fib(6)')

console.time('fib(7)')
console.log(fib(7));    //  13
console.timeEnd('fib(7)')

console.time('fib(8)')
console.log(fib(8));    //  21
console.timeEnd('fib(8)')

console.time('fib(50)')
console.log(fib(50));    //  12586269025
console.timeEnd('fib(50)')