import {
  toBigEndianness32intArray,
  toLittleEndianness32intArray,
} from "./index.js";

describe("ビッグエンディアン => リトルエンディアン", () => {
  test("正しく変換されること", () => {
    const arr = new Uint32Array([1, 2, 3, 4]);
    toLittleEndianness32intArray(arr);
    expect(arr).toEqual(
      new Uint32Array([16777216, 33554432, 50331648, 67108864]),
    );
  });

  test("正しく変換されること(Offsetあり)", () => {
    const arr = new Uint32Array([1, 2, 3, 4]);
    const half = arr.subarray(arr.length - 2, arr.length);
    toLittleEndianness32intArray(half);
    expect(half).toEqual(new Uint32Array([50331648, 67108864]));
    expect(arr).toEqual(new Uint32Array([1, 2, 50331648, 67108864]));
  });
});

describe("リトルエンディアン => ビッグエンディアン", () => {
  test("正しく変換されること", () => {
    const arr = new Uint32Array([1, 2, 3, 4]);
    toBigEndianness32intArray(arr);
    expect(arr).toEqual(
      new Uint32Array([16777216, 33554432, 50331648, 67108864]),
    );
  });

  test("正しく変換されること(Offsetあり)", () => {
    const arr = new Uint32Array([1, 2, 3, 4]);
    const half = arr.subarray(arr.length - 2, arr.length);
    toBigEndianness32intArray(half);
    expect(half).toEqual(new Uint32Array([50331648, 67108864]));
    expect(arr).toEqual(new Uint32Array([1, 2, 50331648, 67108864]));
  });
});
