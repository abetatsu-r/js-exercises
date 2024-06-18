import * as fs from "node:fs";

export function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}

export function stat(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err, stat) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stat);
    });
  });
}
