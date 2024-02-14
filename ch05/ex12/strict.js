obj = { x: { y: { z: "property" } } };
console.log(obj);

with (obj.x) {
  console.log(y.z);
}

undefined = "hoge";

console.log(delete "toString" in obj);
console.log(delete obj);
