import fs from "fs/promises";

// 指定のパス文字列を引数にとり、ファイルなら`file`、ディレクトリなら`directory`を返す関数
export async function checkEntry(path) {
  let stats = await fs.stat(path);
  if (stats.isFile()) {
    return "file";
  } else if (stats.isDirectory()) {
    return "directory";
  } else {
    return "other";
  }
}
