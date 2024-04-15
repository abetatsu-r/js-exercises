/**
 * 方針
 * - private field xを作りgetX()中でxの値を加算するようにする
 */
export class C {
  #x = 0;
  get x() {return this.#x ++};
}
