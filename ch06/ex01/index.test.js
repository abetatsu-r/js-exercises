import { newHashTable } from "./index.js";

describe("put", () => {
  const hashTable = newHashTable();
  test("sizeの更新とマッピングの保存ができること", () => {
    hashTable.put("key", "value");
    expect(hashTable.size).toBe(1);
    hashTable.put("key2", "value");
    expect(hashTable.size).toBe(2);
  });

  test("リンクリスト形式で保存できること", () => {
    hashTable.put("yek", "linked");
    expect(hashTable.size).toBe(3);
    expect(hashTable.get("yek")).toBe("linked");
  });

  test("値を上書きできること", () => {
    hashTable.put("key", "updated");
    expect(hashTable.size).toBe(3);
    console.log("--ここ");
    expect(hashTable.get("key")).toBe("updated");
  });

  test("リンクした値が上書きできること", () => {
    hashTable.put("yek", "linkedUpdated");
    expect(hashTable.size).toBe(3);
    expect(hashTable.get("yek")).toBe("linkedUpdated");
  });
});

describe("get", () => {
  const hashTable = newHashTable();
  hashTable.put("key", "value");
  hashTable.put("yek", "linked");
  test("値を取得できること", () => {
    expect(hashTable.get("key")).toBe("value");
  });

  test("リンクした値を取得できること", () => {
    expect(hashTable.get("yek")).toBe("linked");
  });

  test("存在しない値はundefinedと返すこと", () => {
    expect(hashTable.get("nai")).toBe(undefined);
  });
});

describe("remove", () => {
  const hashTable = newHashTable();
  hashTable.put("key", "value");
  hashTable.put("key2", "value");
  hashTable.put("yek", "linked");

  test("値が取得できなくなること", () => {
    expect(hashTable.get("key2")).toBe("value");
    hashTable.remove("key2");
    expect(hashTable.size).toBe(2);
    expect(hashTable.get("key2")).toBe(undefined);
  });

  test("リンクした値を削除できること", () => {
    expect(hashTable.get("yek")).toBe("linked");
    hashTable.remove("yek");
    expect(hashTable.size).toBe(1);
    expect(hashTable.get("yek")).toBe(undefined);
    expect(hashTable.get("key")).toBe("value");
  });

  test("存在しないkeyは消せずにエラーになること", () => {
    expect(() => hashTable.remove("nai")).toThrowError();
  });
});
