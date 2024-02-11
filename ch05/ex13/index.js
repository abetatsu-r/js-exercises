function* genFib() {
    let pre1 = 1;
    let pre2 = 0;
    // 第一項の呼び出し
    yield 1;

    // 第二項以降の呼び出し
    while (true) {
        let fib = pre1 + pre2;
        pre2 = pre1;
        pre1 = fib;
        yield fib;
    }
}
