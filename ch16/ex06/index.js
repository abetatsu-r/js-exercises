import fs from "fs/promises";

await fs.truncate("data.txt", 100);
