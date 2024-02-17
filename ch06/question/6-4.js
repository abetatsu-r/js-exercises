let o = {x: 1, y:2};

let x = Object.create(o);

console.log(x.x); // 1;
console.log(x.y); // 2;
x.x = 2;
console.log(x.x); // 2;


delete o.x;
delete o.y;
console.log(x.x); // 2;
console.log(x.y); // undef