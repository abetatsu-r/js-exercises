console.log("👨‍👨‍👧‍👧".length);
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });

let input = "𠮷野家";
let i = 0;
for (let [str, index] of "𠮷野家") {
  console.log("false:" + str.codePointAt(0));

  i++;
}

for (let n = 0; n < input.length; n++) {
  console.log("point:" + input.codePointAt(n).toString(16));
}
console.log(i);
