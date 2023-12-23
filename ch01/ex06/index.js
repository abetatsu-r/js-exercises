export function fib(n) {
  let sum = 1;
  let prevSum = 1;
  while (n > 2) {
    let temp = sum;
    sum += prevSum;
    prevSum = temp;
    n--;
  }
  return sum;
}
