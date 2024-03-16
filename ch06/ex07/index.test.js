import { assign } from "./index.js";

const symbol = Symbol("test");
const parent = { parent: "parent" };

test.each([
  { target: {}, sources: {} },
  {
    target: {},
    sources: { a: {}, 1: [], [symbol]: 3 },
  },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: {},
  },
  {
    target: { a: {} },
    sources: { 1: [], [symbol]: 3 },
  },
  // 値が上書きされること
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: { a: 1 },
  },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: { 1: 2 },
  },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: { [symbol]: 4 },
  },
  // 継承プロパティでは上書きできない
  {
    target: { parent: "child" },
    sources: Object.create(parent),
  },
])(
  "$#: target, source(1つ), expected = {$target, $sources, $expected}",
  ({ target, sources, expected }) => {
    // targetが上書きされてしまうので事前にコピーしておく
    const target_copy = Object.assign({}, target);
    expect(
      equal(assign(target, sources), Object.assign(target_copy, sources)),
    ).toBe(true);
  },
);

test.each([
  { target: {}, sources: [{}, {}] },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: [{ a: 1 }, { 1: 2 }],
  },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: [{ 1: 2 }, { [symbol]: 4 }],
  },
  {
    target: { a: {}, 1: [], [symbol]: 3 },
    sources: [
      { a: 1, 1: 2, [symbol]: 4 },
      { 1: 3, [symbol]: 5 },
    ],
  },
  {
    target: Object.create(parent),
    sources: [{}, parent],
  },
  {
    target: { parent: "child" },
    sources: [{}, Object.create(parent)],
  },
])(
  "$#: target, source(2つ), expected = {$target, [$sources.0, $sources.1], $expected}",
  ({ target, sources, expected }) => {
    // targetが上書きされてしまうので事前にコピーしておく
    const target_copy = Object.assign({}, target);
    expect(
      equal(assign(target, ...sources), Object.assign(target_copy, ...sources)),
    ).toBe(true);
  },
);

function equal(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // 列挙可能独自プロパティの等値判定
  for (let [k, v] of Object.entries(obj1)) {
    if (!(k in obj2) || !(v === obj2[k])) {
      return false;
    }
  }

  // Symbolプロパティの等値判定
  for (let key of Object.getOwnPropertySymbols(obj1)) {
    if (
      obj1.propertyIsEnumerable(key) &&
      (!(key in obj2) || !(obj1[key] === obj2[key]))
    ) {
      return false;
    }
  }

  return true;
}
