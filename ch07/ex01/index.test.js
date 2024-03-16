import { sum_matrix, mul_matrix } from "./index.js";

describe("sum", () => {
  test.each([
    {
      m1: [[1]],
      m2: [[1]],
      expected: [[2]],
    },
    {
      m1: [
        [1, 2],
        [3, 4],
      ],
      m2: [
        [4, 3],
        [2, 1],
      ],
      expected: [
        [5, 5],
        [5, 5],
      ],
    },
  ])("$#: m1,m2,expected = {$m1, $m2, $expected}", ({ m1, m2, expected }) => {
    const result = sum_matrix(m1, m2);
    expect(result).toEqual(expected);
  });
});

describe("mul", () => {
  test.each([
    {
      m1: [[1]],
      m2: [[1]],
      expected: [[1]],
    },
    {
      m1: [
        [1, 2],
        [3, 4],
      ],
      m2: [
        [4, 3],
        [2, 1],
      ],
      expected: [
        [8, 5],
        [20, 13],
      ],
    },
    {
      m1: [[1, 2]],
      m2: [[1], [2]],
      expected: [[5]],
    },
  ])("$#: m1,m2,expected = {$m1, $m2, $expected}", ({ m1, m2, expected }) => {
    const result = mul_matrix(m1, m2);
    expect(result).toEqual(expected);
  });
});
