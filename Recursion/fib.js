// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fibArray = []
//     fibArray[0] = 0
//     fibArray[1] = 1
//     for(let i = 2; i <= n; i++) {
//         fibArray[i] = fibArray[i-2] + fibArray[i-1]
//     }
//     return fibArray[n]
// }

// Now a recursive solution - This is actually a terrible solution because the runtime Complexity is really big -  exponential runtime 2^n
// Only way to improve this solution is to use memoization

function memoize(fn){
    const cache = {}
    return function(...args){
        if(cache[args]) {
            return cache[args]
        }
    const result = fn.apply(this, args)
    cache[args] = result;

    return result
    }
}

function slowfib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n -2)
}
fib = memoize(slowfib)


module.exports = fib;