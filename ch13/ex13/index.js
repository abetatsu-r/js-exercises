import * as fsPromises from "node:fs/promises"

export async function* walk(rootPath) {
    const files = (await fsPromises.readdir(rootPath, { withFileTypes: true, recursive: true})).map(dirent => {
        const pathName = (dirent.path.replace(rootPath, "") + "/" + dirent.name).replaceAll('\\', '/').replace('/', "");
        return {path: pathName, isDirectory: !dirent.isFile()}
    })
    yield* files;
}
