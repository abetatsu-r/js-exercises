export function counterGroup() {
  let totalCount = 0;

  return {
    newCounter: function () {
      let n = 0;
      return {
        count: function () {
          totalCount++;
          return n++;
        },
        reset: function () {
          totalCount -= n;
          n = 0;
        },
      };
    },
    total: function () {
      return totalCount;
    },
  };
}

// memo
let c = counterGroup();
let a = c.newCounter();
let b = c.newCounter();

console.log(c.total());
a.count();
b.count();
console.log(c.total());
a.reset();
console.log(c.totalCount); // 取れない
