let parents = { x: 1, y: 2, z: 3 };
let child = Object.create(parents);

console.log(Object.getPrototypeOf(child)); // { x: 1, y: 2, z: 3 }
