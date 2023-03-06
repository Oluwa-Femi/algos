function FibonacciChecker(num) {
  // code goes here  
  const fib_list = [0, 1]
  // Make fib list
  for (let i = 2; i <= num + 1; i++) {
    fib_list[i] = fib_list[i - 2] + fib_list[i - 1]
  }

  if (fib_list.includes(num)) {
    return "yes"
  }
  else {
    return "no"
  }
}
console.log(FibonacciChecker(num));