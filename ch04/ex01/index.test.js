import { add, sub, div, mul } from "./index.js"; // typescript で書く場合は "./index.ts"

function addTestCase(c1, c2, expected) {
  return [c1, c2, expected];
}

function subTestCase(c1, c2, expected) {
  return [c1, c2, expected];
}

function mulTestCase(c1, c2, expected) {
  return [c1, c2, expected];
}

function divTestCase(c1, c2, expected) {
  return [c1, c2, expected];
}

let equal = function (v1, v2) {
  if (v1 === v2) {
    return true;
  }

  if (typeof v1 !== "object" || typeof v2 != "object") {
    return false;
  }

  // keyの数が一致
  if (Object.keys(v1).length !== Object.keys(v2).length) return false;
  // v1のプロパティがv2に存在し、かつ値が一致する場合true
  for (let key in v1) {
    if (!(key in v2)) {
      return false;
    }
    if (v1.key !== v2.key) {
      return false;
    }
  }

  return true;
};

let c1 = { re: 1, im: 1 };
let c2 = { re: 1, im: -1 };
let c3 = { re: -1, im: 1 };

let i1 = { im: 1 };
let i2 = { im: -1 };

let a1 = { abs: Math.SQRT2, arg: Math.PI / 4 }; // 1 + 1i
let a2 = { abs: Math.SQRT2, arg: -Math.PI / 4 }; // 1 + -1i

test.each([
  addTestCase(1, 1, 2),
  addTestCase(1, -1, 0),
  addTestCase(c1, c1, { re: 2, im: 2 }),
  addTestCase(c1, 1, { re: 2, im: 1 }),
  addTestCase(1, c1, { re: 2, im: 1 }),
  addTestCase(c1, c2, 2),
  addTestCase(c1, c3, { im: 2 }),
  addTestCase(c2, c3, 0),
  addTestCase(c1, i1, { re: 1, im: 2 }),
  addTestCase(i1, c1, { re: 1, im: 2 }),
  addTestCase(i1, i1, { im: 2 }),
  addTestCase(i1, i2, 0),
  addTestCase(1, i1, c1),
  addTestCase(i1, 1, c1),
  addTestCase(a1, c1, { re: 2, im: 2 }),
  addTestCase(c1, a1, { re: 2, im: 2 }),
  addTestCase(a1, a1, { re: 2, im: 2 }),
])("add(%p, %p) => %p", (n1, n2, expected) => {
  expect(equal(add(n1, n2), expected)).toBe(true);
});

test.each([
  subTestCase(1, 1, 0),
  subTestCase(1, -1, 2),
  subTestCase(c1, c1, 0),
  subTestCase(c1, 1, { im: 1 }),
  subTestCase(1, c1, { im: -1 }),
  subTestCase(c1, c2, { im: 2 }),
])("sub(%p, %p) => %p", (n1, n2, expected) => {
  expect(equal(sub(n1, n2), expected)).toBe(true);
});

test.each([
  mulTestCase(c1, c1, { im: 2 }),
  mulTestCase(c1, -1, { re: -1, im: -1 }),
  mulTestCase(2, c1, { re: 2, im: 2 }),
  mulTestCase(1, 2, 2),
  mulTestCase(c1, 0, 0),
])("mul(%p, %p) => %p", (n1, n2, expected) => {
  expect(equal(mul(n1, n2), expected)).toBe(true);
});

test.each([
  divTestCase(c1, c1, 1),
  divTestCase(c1, -1, { re: -1, im: -1 }),
  divTestCase(2, c1, { re: 2, im: 2 }),
  divTestCase(1, 2, 0.5),
  divTestCase(0, c1, 0),
])("div(%p, %p) => %p", (n1, n2, expected) => {
  expect(equal(div(n1, n2), expected)).toBe(true);
});
