import { walk } from "./index.js";

test("success walk", () => {
    const fileSequence = walk("ch12/ex06/root");

    expect(fileSequence.next().value).toEqual({ path: 'file.txt', isDirectory: false });
    expect(fileSequence.next().value).toEqual({ path: 'file2.txt', isDirectory: false });
    expect(fileSequence.next().value).toEqual({ path: 'leaf', isDirectory: true });
    expect(fileSequence.next().value).toEqual({ path: 'leaf/file3.txt', isDirectory: false });
    expect(fileSequence.next().value).toEqual({ path: 'leaf/file4.txt', isDirectory: false });
    expect(fileSequence.next().value).toEqual({ path: 'leaf/leaf2', isDirectory: true });
    expect(fileSequence.next().value).toEqual({ path: 'leaf/leaf2/file5.txt', isDirectory: false });
})
