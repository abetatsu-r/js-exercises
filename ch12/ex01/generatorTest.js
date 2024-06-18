import { counterGen } from "./counter.js";

const g = counterGen(3);

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

/**
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }
counterGen: next
{ value: 3, done: false }
counterGen: finally
{ value: undefined, done: true }
 */

const g1 = counterGen(99);
/**
try {
    // next()が一回も呼ばれてないとだめ
    g1.throw()
} catch(_) {}
*/

g1.next();
g1.throw("end"); // 定義せずとも実行可能
console.log(g1.next()); // doneになっている

/**
counterGen
counterGen: next
counterGen: catch: end
counterGen: finally
{ value: undefined, done: true }
 */

const g2 = counterGen(99);

for (let v of g2) {
  console.log(v);
  if (v > 2) {
    console.log("--- what happen at break point?? ----");
    // finallyが実行される
    break;
  }
}

/**
counterGen: next
1
counterGen: next
2
counterGen: next
3
--- what happen at break point?? ----
counterGen: finally
 */
