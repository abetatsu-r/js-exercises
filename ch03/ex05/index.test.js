import { fixCRLFToLF, fixLFToCRLF } from ".";

test("CRLFからLFに変換する", () => {
  let str = "test\r\ntest";
  expect(fixCRLFToLF(str)).toBe("test\ntest");
});

test("LFからCRLFに変換する", () => {
  let str = "test\ntest";
  expect(fixLFToCRLF(str)).toBe("test\r\ntest");
});
