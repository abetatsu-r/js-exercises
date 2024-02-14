import { getEvenProperties } from "./index.js";

function getEvenPropertiesTest(data, expected) {
  return [data, expected];
}

test.each([
  // Objectの場合
  getEvenPropertiesTest({ x: 1, y: 2, z: 3 }, { y: 2 }),
  getEvenPropertiesTest({ x: 2, y: 0, z: -2 }, { x: 2, y: 0, z: -2 }),
  getEvenPropertiesTest({ x: NaN, y: undefined, z: null, a: Infinity }, {}),
  getEvenPropertiesTest({ x: "2", y: false, z: { a: 2, b: 2 } }, {}),
  getEvenPropertiesTest({}, {}),
  // 配列の場合
  getEvenPropertiesTest([1, 2, 3, 4], [2, 4]),
  getEvenPropertiesTest([-2, 0, 2], [-2, 0, 2]),
  getEvenPropertiesTest([NaN, undefined, null, Infinity], []),
  getEvenPropertiesTest(["2", false, [2, 4]], []),
  getEvenPropertiesTest([], []),
  // その他の場合
  getEvenPropertiesTest(null, {}),
  getEvenPropertiesTest(undefined, {}),
  getEvenPropertiesTest(2, {}),
  getEvenPropertiesTest("2", {}),
])("getEvenProperties(%p) => %p", (data, expected) => {
  expect(equal(getEvenProperties(data), expected)).toBe(true);
});

function equal(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let [k, v] of Object.entries(obj1)) {
    if (!(k in obj2) || !(v === obj2[k])) {
      return false;
    }
  }

  return true;
}
