export function* counter() {
  let count = 0;
  while (true) {
    try {
      console.log("count");
      yield ++count;
    } catch (_) {
      count = 0;
      console.log("before, err")
      yield count;
      console.log("after, err")
    }
  }
}

let c = counter();
c.next();
console.log(c.throw());
console.log("-----");
c.next();
