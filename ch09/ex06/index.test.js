import {TypedMap} from "./index.js";

test("constructor", () => {
    new TypedMap('string', 'number', [
        ['a', 1],
        ['b', 2]
    ]);

    expect(() => {new TypedMap('string', 'number', [
        [1, 3]
    ])}).toThrow();
})

test("set", () => {
    const tm = new TypedMap('string', 'number');

    // 新規設定
    tm.set('c', 4);
    expect(tm.get('c')).toBe(4);

    // 更新
    tm.set('c', 5);
    expect(tm.get('c')).toBe(5);

    // TypeError
    expect(() => {tm.set('c', '4')}).toThrow();
})
