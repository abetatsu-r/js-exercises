import { Histogram } from "./histogram";

describe("histogram", () => {
  describe("add", () => {
    it("Histogramが更新されることの確認", () => {
      let histogram = new Histogram();
      histogram.add("AAaaa bbbbc");
      expect(histogram.letterCounts.get("A")).toBe(5);
      expect(histogram.letterCounts.get("B")).toBe(4);
      expect(histogram.letterCounts.get("C")).toBe(1);
      expect(histogram.letterCounts.get("D")).toBe(0);
      expect(histogram.totalLetters).toBe(10);
    });

    // it("空白文字を含むtextで正しくカウントされることの確認")
  });

  describe("toString", () => {
    it("正しく出力されることの確認", () => {
      let histogram = new Histogram();
      histogram.add("AAaaa bbb cD");

      let expected =
        "A: ################################################## 50.00%\n" +
        "B: ############################## 30.00%\n" +
        "C: ########## 10.00%\n" +
        "D: ########## 10.00%";

      expect(histogram.toString()).toBe(expected);
    });
  });
});
