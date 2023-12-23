import { DefaultMap } from "./defaultMap";

describe("get", () => {
  it("keyが存在しない場合に、default値を返すことの確認", () => {
    let defaultMap = new DefaultMap("default");
    expect(defaultMap.get("notExist")).toBe("default");
  });
});
