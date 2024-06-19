import { readLines } from "./index.js";

test("success Reading", () => {
    let lines = readLines("ch12/ex05/text/lines.txt");
    expect(lines.next().value).toBe("First Line.");
    expect(lines.next().value).toBe("Second Line.");

    const lastLine = lines.next()
    expect(lastLine.value).toBe("Third Line.");
    expect(lastLine.done).toBe(true);
})

test("success Reading2", () => {
    let lines = readLines("ch12/ex05/text/lineEndWithEmpty.txt");
    expect(lines.next().value).toBe("First Line.");
    expect(lines.next().value).toBe("Second Line.");

    expect(lines.next().value).toBe("Third Line.");
    const lastLine = lines.next()
    expect(lastLine.value).toBe("");
    expect(lastLine.done).toBe(true);
})

test("finished with throw", () => {
    let lines = readLines("ch12/ex05/text/lines.txt");
    expect(lines.next().value).toBe("First Line.");
    expect(() => lines.throw()).toThrow();
})