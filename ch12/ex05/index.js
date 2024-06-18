import * as fs from "node:fs";

const READ_SIZE = 5;

function* readLines(filePath) {
    const fd = fs.openSync(filePath, "r");
    const buff = Buffer.alloc(READ_SIZE);   
    let pos = 0;
    let str = "";
    let lines = [];
    let size = 0;
    while((size = fs.readSync(fd, buff, 0, READ_SIZE, pos)) !== 0) {
        // stringに直す
        str = str + (buff.toString("utf-8", 0, size));
        lines = str.split("\n");
        while(lines.length > 1) {
            yield lines.shift();
        }
        pos += size;
        str = lines[0];
    }   

    yield lines[0];
}

let chunk = readLines("oneLine.txt");
console.log(chunk.next().value);
console.log(chunk.next().value);
console.log(chunk.next().value);
console.log(chunk.next().value);





