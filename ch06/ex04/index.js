let obj = { x: 1, y: 2, z: 3 };

// x, y, zはともに独自プロパティ
obj.hasOwnProperty("x");
obj.hasOwnProperty("y");
obj.hasOwnProperty("z");

// x, y, zはともに列挙可能
obj.propertyIsEnumerable("x");
obj.propertyIsEnumerable("y");
obj.propertyIsEnumerable("z");

// xを書き込み不可に
Object.defineProperty(obj, "x", {
  writable: false,
});

// yを列挙不可に
Object.defineProperty(obj, "y", {
  enumerable: false,
});

// zを再定義不可に
Object.defineProperty(obj, "z", {
  configurable: false,
});

// xは列挙可能・再定義可能・書き込み不可
try {
  obj.x = 5;
} catch (_) {
  console.log("x is not be rewritten");
}
console.log("x is ownProperty?: " + obj.hasOwnProperty("x")); // true
console.log("x is enumerable?:" + obj.propertyIsEnumerable("x")); // true
console.log(delete obj.x); // true;

// yは書き込み可能、再定義可能、列挙不可
(obj.y = 3), console.log("y is: " + obj.y);
console.log("y is ownProperty?: " + obj.hasOwnProperty("y")); // true
console.log("y is enumerable?:" + obj.propertyIsEnumerable("y")); // false
console.log(delete obj.y); // true;

// zは列挙可能・書き込み可・再定義不可
(obj.z = 6), console.log("z is: " + obj.z);
console.log("z is ownProperty?: " + obj.hasOwnProperty("z")); // true
console.log("z is enumerable?:" + obj.propertyIsEnumerable("z")); // true
try {
  console.log(delete obj.z);
} catch (_) {
  console.log("z is not be deleted");
}

/**
 *  x is not be rewritten
    x is ownProperty?: true
    x is enumerable?:true
    true
    y is: 3
    y is ownProperty?: true
    y is enumerable?:false
    true
    z is: 6
    z is ownProperty?: true
    z is enumerable?:true
    z is not be deleted
 */
