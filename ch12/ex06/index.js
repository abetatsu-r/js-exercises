import * as fs from "node:fs";

export function* walk(rootPath) {
  const fileObjs = fs
    .readdirSync(rootPath, { withFileTypes: true })
    .map((dirent) =>
      dirent.isFile()
        ? [{ path: dirent.name, isDirectory: false }]
        : [
            { path: dirent.name, isDirectory: true },
            walkDeep(rootPath, dirent.name),
          ],
    )
    .flat(Infinity);
  yield* fileObjs;
}

function walkDeep(rootPath, path) {
  return fs
    .readdirSync(rootPath + "/" + path, { withFileTypes: true })
    .map((dirent) =>
      dirent.isFile()
        ? { path: path + "/" + dirent.name, isDirectory: false }
        : [
            { path: path + "/" + dirent.name, isDirectory: true },
            walkDeep(rootPath + "/", path + "/" + dirent.name),
          ],
    );
}
