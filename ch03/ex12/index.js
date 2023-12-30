let obj1 = { x: 1 };
obj1.y = 2;
console.log(obj1); // { x: 1, y: 2 }

let obj2 = { x: 1, y: 2 };
console.log(obj1 === obj2); // false

export function equal(obj1, obj2) {
  if (obj1 === obj2) return true;

  // Obj1の全てのプロパティに対して、Obj2が同一の値を持つ
  for (let name in obj1) {
    if (obj1[name] !== obj2[name]) {
      return false;
    }
  }

  // かつ、Obj2の全てのプロパティに対して、Obj1が同一の値を持つ
  for (let name in obj2) {
    if (obj1[name] !== obj2[name]) {
      return false;
    }
  }

  return true;
}
