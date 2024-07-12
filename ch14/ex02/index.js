/**
 * memo:
 * - [Symbol.species]でMyArrayLikeを返すようにする
 * - arrayLengthが引数として渡され、construcorが呼び出されMyArrayLikeが作られ、その要素にmapの結果が自動で割り振られているっぽい？
 * - テストは通った
 */
export class MyArrayLike {
  constructor(arrayLength) {
    this.length = arrayLength;
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }
}
