describe("ex3-4", () => {
  const p = "💯";
  it("lengthの値の確認", () => {
    expect(p.length).toBe(2);
  });

  it("文字コードの確認", () => {
    expect(p === "\uD83D\uDCAF").toBe(true);
    expect(p === "\u{0001F4AF}").toBe(true);
  });
});
