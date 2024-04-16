class C_notPrivate {
  x = 42;

  getX() {
    return this.x;
  }
}

const c1 = new C_notPrivate();
c1.x = 45;
console.log(c1.x); // 45

/**
 * 方針
 * - Private Fieldを使う
 * - クロージャなので関数定義の方式でクラス定義を行う
 */
export class PrivateC {
  #x = 42;
  get x() {
    return this.#x;
  }
}

const c2 = new PrivateC();
try {
  c2.x = 45;
} catch (ignore) {
  // throw error
}

console.log(c2.x);

export function ClosureC() {}

ClosureC.prototype = {
  get x() {
    return 42;
  },
};

const c3 = new ClosureC();
try {
  c3.x = 45;
} catch (ignore) {
  // throw error
}
console.log(c3.x);
