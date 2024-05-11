export class TypeMap {
  constructor() {
    this.map = new Map();
  }

  get(key) {
    // constructor関数かどうか
    if (!(typeof key === "function") || !/^[A-Z]/g.test(key.name)) {
      return undefined;
    }

    return this.map.get(key);
  }

  set(key, value) {
    // constructor関数かどうか
    if (!(typeof key === "function") || !/^[A-Z]/g.test(key.name)) {
      throw Error("keyに指定できるのはコンストラクタ関数のみです");
    }

    // valueがkeyに指定したconstructor関数のクラスか？
    switch (typeof value) {
      case "number":
        if (key === Number) {
          return this.map.set(key, value);
        }
        break;
      case "string":
        if (key === String) {
          return this.map.set(key, value);
        }
        break;
      case "boolean":
        if (key === Boolean) {
          return this.map.set(key, value);
        }
        break;
      default:
        if (value instanceof key) {
          return this.map.set(key, value);
        }
    }

    throw Error("不正な組み合わせ");
  }
}
