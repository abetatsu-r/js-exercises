import * as fsPromises from "node:fs/promises";
import * as path from "node:path";

export async function fetchFirstFileSize(filepath) {
  const files = await fsPromises.readdir(filepath);
  if (files.length === 0) {
    return null;
  }
  return (await fsPromises.stat(path.join(filepath, files[0]))).size;
}

export async function fetchSumOfFileSizes(filePath) {
  const files = await fsPromises.readdir(filePath);

  let total = 0;
  const rest = [...files];

  async function iter() {
    if (rest.length === 0) {
      console.log("total is " + total);
      return total;
    }

    const next = rest.pop();
    const size = (await fsPromises.stat(path.join(filePath, next))).size;
    total += size;
    console.log(total);
    await iter();
  }

  await iter();
  return total;
}
