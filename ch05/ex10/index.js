let obj = {
  x: [
    {
      y1: { z: "property1" },
    },
    {
      y2: { z: "property2" },
    },
    {
      y3: { z: "property3" },
    },
  ],
};

let start = performance.now();
with (obj.x) {
  console.log(y1.z);
  console.log(y2.z);
  console.log(y3.z);
}
let end = performance.now();

console.log("time: " + (end - start));

let start2 = performance.now();
console.log(obj.x.y1.z);
console.log(obj.x.y2.z);
console.log(obj.x.y3.z);
let end2 = performance.now();

console.log("time: " + (end - start));
