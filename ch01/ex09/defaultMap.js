// Keyが存在しない場合にdefault値を返す拡張Mapクラス
export class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}
