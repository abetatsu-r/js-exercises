import { checkEntry } from "./index";

// ES Moduleだと__dirnameが使えないので定義する(Nodeのバージョンの問題？)
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_PATH = __dirname;

describe("checkEntry", () => {
  test("returns 'file'", async () => {
    const result = await checkEntry(FILE_PATH + "/testFile.txt");
    expect(result).toBe("file");
  });

  test("returns 'directory'", async () => {
    const result = await checkEntry(FILE_PATH + "/testDirectory");
    expect(result).toBe("directory");
  });
});
