/**
 * 方針
 * - TypedMapをもとにcompositionに書き換える
 */
export class TypedMap {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k != keyType || typeof v != valueType) {
          throw new TypeError(`Wrong type for entry [$(k), $(v)]`);
        }
      }
    }

    this.map = new Map(entries);

    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not type ${this.keyType}`);
    }

    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not type ${this.valueType}`);
    }

    return this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }
  values() {
    return this.map.values();
  }
  keys() {
    return this.map.keys();
  }
  entries() {
    return this.nap.entries();
  }
}
