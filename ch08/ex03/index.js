function factRecursive(n) {
  if (n == 1) return n;
  else return n * factRecursive(n - 1);
}

function factTailRecursive(n, a) {
  if (n == 0) a;
  else factTailRecursive(n - 1, a * n);
}

console.log(factTailRecursive(5000)); // RangeError: Maximum call stack size exceeded
