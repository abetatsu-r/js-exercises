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

debugger;
console.log("obj");

let start = performance.now();

let end = performance.now();

console.log("time: " + (end - start));

let start2 = performance.now();
console.log(obj.x.y1.z);
console.log(obj.x.y2.z);
console.log(obj.x.y3.z);
let end2 = performance.now();

console.log("time: " + (end - start));
