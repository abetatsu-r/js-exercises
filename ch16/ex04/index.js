import fs from "fs";
import iconv from "iconv-lite";

const stream = fs.createReadStream("hello.txt");

// これもしかしてサイズが大きいとダメなのかもしれない
// その場合p648に倣ってstream.Tramnsformを使うんだろう
stream.on("readable", () => {
  const data = stream.read();
  if (data) {
    console.log(iconv.decode(data, "Shift_JIS"));
  }
});
