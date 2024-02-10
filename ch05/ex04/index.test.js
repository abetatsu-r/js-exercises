import { fib10_1, fib10_2,fib10_3 } from "./index.js";

describe("fib10", () => {
    it("フィボナッチ数列先頭10要素が正しく計算されること", () => {
        const answer = [1,1,2,3,5,8,13,21,34,55];
        expect(fib10_1().toString()).toBe(answer.toString());
        expect(fib10_2().toString()).toBe(answer.toString());
        expect(fib10_3().toString()).toBe(answer.toString());
    })
})