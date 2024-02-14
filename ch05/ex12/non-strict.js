obj = { x: { y: { z: "property" } } };
console.log(obj); // { x: { y: { z: 'property' } } }

with (obj.x) {
  console.log(y.z); // property
}

// ここから下は、そもそも動かない
undefined = "hoge";

console.log(delete "toString" in obj); // false
console.log(delete obj); // false
