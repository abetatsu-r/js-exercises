import { counterIter } from "./counter.js";

const c = counterIter(3);
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

/**
    counterIter: next
    { value: 1, done: false }
    counterIter: next
    { value: 2, done: false }
    counterIter: next
    { value: 3, done: false }
    counterIter: next
    { value: undefined, done: true }
 */

const c_break = counterIter(99);
for (let v of c_break) {
  console.log("iterator: " + v);
  if (v > 3) {
    console.log("--- break point ---");
    break;
  }
}

/**
counterIter: Symbol.iterator
counterIter: next
iterator: 1
counterIter: next
iterator: 2
counterIter: next
iterator: 3
counterIter: next
iterator: 4
--- break point ---
counterIter: return: undefined
 */

const c_throw = counterIter(99);
for (let v of c_throw) {
  console.log("iterator: " + v);
  if (v > 2) {
    console.log("--- break point ---");
    try {
      c_throw.throw("error calling");
    } catch (_ignore) {
      break;
    }
  }
}

/**
counterIter
counterIter: Symbol.iterator
counterIter: next
iterator: 1
counterIter: next
iterator: 2
counterIter: next
iterator: 3
--- break point ---
counterIter: throw: RangeError
 */
