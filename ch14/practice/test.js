export function* primes() {
  yield* sieve(integersFrom(2));
}

function* sieve(iterator) {
  const prime = iterator.next().value;
  console.log("prime is" + prime);
  yield prime;
  yield* sieve(filter(iterator, (v) => v % prime !== 0));
}

// ref.p.363
function filter(iterable, predicate) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        const v = iterator.next();
        console.log("v:" + v.value + ",predicate:" + predicate(v.value));
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}

function* integersFrom(n) {
  console.log("integersFrom(" + n + ")");
  while (true) {
    console.log("n:" + n);
    yield n++;
  }
}

const ps = primes();
ps.next();
console.log("---------");
ps.next();
console.log("---------");
ps.next();
console.log("---------");
