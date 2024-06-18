import * as fsPromises from "node:fs/promises";
import * as path from "node:path";

export async function fetchSumOfFileSizes(filePath) {
  const files = await fsPromises.readdir(filePath);
  const sizes = (
    await Promise.all(
      files.map((file) => fsPromises.stat(path.join(filePath, file))),
    )
  ).map((stats) => stats.size);
  return sizes.reduce((x, y) => x + y);
}
