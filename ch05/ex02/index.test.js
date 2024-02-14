import {
  replaceToEscapeSequence,
  replaceToEscapeSequenceWithSwitch,
} from "./index.js";

function replaceToEscapeSequenceTest(n, expected) {
  return [n, expected];
}

test.each([
  // 置換できること
  replaceToEscapeSequenceTest("a\0b", "a\\0b"),
  replaceToEscapeSequenceTest("a\bb", "a\\bb"),
  replaceToEscapeSequenceTest("a\tb", "a\\tb"),
  replaceToEscapeSequenceTest("a\nb", "a\\nb"),
  replaceToEscapeSequenceTest("a\vb", "a\\vb"),
  replaceToEscapeSequenceTest("a\fb", "a\\fb"),
  replaceToEscapeSequenceTest("a\rb", "a\\rb"),
  replaceToEscapeSequenceTest('a"b', 'a\\"b'),
  replaceToEscapeSequenceTest("a'b", "a\\'b"),
  replaceToEscapeSequenceTest("a\\b", "a\\\\b"),
  // 複数でも置換できること
  replaceToEscapeSequenceTest("you say 'hoge'", "you say \\'hoge\\'"),
  replaceToEscapeSequenceTest("\0\b\t\n\v", "\\0\\b\\t\\n\\v"),
])("replaceToEscapeSequence(%p) => %p", (n, expected) => {
  expect(replaceToEscapeSequence(n)).toBe(expected);
  expect(replaceToEscapeSequenceWithSwitch(n)).toBe(expected);
});
