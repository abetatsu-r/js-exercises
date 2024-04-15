import {instanceOf} from "./index.js";

test("instanceOfがtrueの場合", () => {
    class C {};
    const i = new C();
    expect(instanceOf(i, C)).toBe(i instanceof C);
})

test("instanceOfがfalseの場合", () => {
    class C {};
    class D {};
    const i = new C();
    expect(instanceOf(i, D)).toBe(i instanceof D);
})

test("多段継承でtrueの場合", () => {
    class C {};
    class C1 extends C {};
    class C2 extends C1 {};

    const i1 = new C1();
    const i2 = new C2();

    expect(instanceOf(i1, C)).toBe(i1 instanceof C);
    expect(instanceOf(i2, C1)).toBe(i2 instanceof C1);
    expect(instanceOf(i2, C)).toBe(i2 instanceof C);
})

test("多段継承でfalseの場合", () => {
    class C {};
    class D extends C {};
    class E extends C {};

    class D1 extends D {};

    const i = new D1();
    expect(instanceOf(i, E)).toBe(i instanceof E);
})
