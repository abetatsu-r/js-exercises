export function fibbonacciIterator() {
  let x = 0,
    y = 1;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [x, y] = [y, x + y];
      return { value: x, done: false };
    },
    return(value) {
      return { value, done: true };
    },
    throw(e) {
      throw e;
    },
  };
}
