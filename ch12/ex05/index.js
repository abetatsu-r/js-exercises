import * as fs from "node:fs";

const READ_SIZE = 5;

export function* readLines(filePath) {
  const fd = fs.openSync(filePath, "r");
  let lines = [];

  try {
    const buff = Buffer.alloc(READ_SIZE);
    let pos = 0;
    let str = "";
    let size = 0;
    while ((size = fs.readSync(fd, buff, 0, READ_SIZE, pos)) !== 0) {
      // stringに直す
      str = lines.toString() + buff.toString("utf-8", 0, size);
      lines = str.split("\n");
      while (lines.length > 1) {
        yield lines.shift();
      }
      pos += size;
    }
  } finally {
    fs.closeSync(fd);
  }

  return lines[0];
}
