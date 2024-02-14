let obj = { x: { y: { z: "property" } } };
console.log(obj);

//with(obj.x) {
console.log(obj.x.y.z);
//}

// 無理
//undefined = 'hoge';
//delete obj;
