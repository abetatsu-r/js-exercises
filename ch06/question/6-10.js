const testParentObj = {
  abc: 123,
  aaa: 456,
};

const testChildObject = Object.create(testParentObj);
testChildObject.a = 1;
testChildObject.b = 1;
const symbolProp1 = Symbol("symbolProp");
const symbolProp2 = Symbol("symbolProp");

testChildObject[symbolProp1] = "symbolPropValue";
testChildObject[symbolProp2] = "symbolPropValue";
console.log(testChildObject);


expect(getAllPropertyNames(testChildObject)).toEqual([
  "a",
  "b",
  "0", //symbolPropになぜかならない
  "1", //symbolPropになぜかならない
  "length",
  "abc",
  "aaa",
]);