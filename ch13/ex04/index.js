import * as fsPromises from "node:fs/promises";
import * as path from "node:path";

export function fetchFirstFileSize(filepath) {
  return fsPromises
    .readdir(filepath)
    .then((files) => {
      if (files.length === 0) {
        return null;
      }
      return fsPromises.stat(path.join(filepath, files[0]));
    })
    .then((stats) => stats.size)
    .catch((err) => null);
}

export function fetchSumOfFileSizes(filePath) {
  return fsPromises
    .readdir(filePath)
    .then((files) => {
      const promises = files.map((file) =>
        fsPromises.stat(path.join(filePath, file)).then((stats) => stats.size),
      );
      return Promise.all(promises);
    })
    .then((sizes) => sizes.reduce((x, y) => x + y));
}
