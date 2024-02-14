import { parseStringToJson } from "./index.js";

describe("parseStringToJson", () => {
  it("parseに成功したとき、成功可否とパースしたデータが出力されること", () => {
    let result = parseStringToJson('{"test" : "ok"}');
    expect(result.success).toBe(true);
    expect(result.data.test).toBe("ok");
    expect(result.error).toBe(undefined);
  });

  it("parseに失敗したとき、成功可否とエラーメッセージが出力されること", () => {
    let result = parseStringToJson("{invalidJson");
    expect(result.success).toBe(false);
    expect(result.data).toBe(undefined);
    expect(result.error.name).toBe("SyntaxError");
    expect("message" in result.error).toBe(true);
  });
});
