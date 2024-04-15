/**
 * 方針
 * - ECMAScriptをざっくり参照
 * 1. objectでなければtypeErrorを吐く
 * 2. constructorのhasInstanceの値を参照する
 * 3. hasInstanceがundefiendでなければ、その値がobjectかどうかを見る
 * 4. objectのプロトタイプチェーンをたどり、constructor.protoTypeがあるかを調べる
 * 
 * @param {} object 
 * @param {*} constructor 
 * @returns 
 */
export function instanceOf(object, constructor) {
    // objectでなければTypeErrorを投げる
    if (typeof object !== 'object') throw TypeError;

    // Symbol.hasInstanceを見る
    let instOfHandler = constructor[Symbol.hasInstance];

    // hasInstanceが存在する場合その値を参照する
    if (instOfHandler !== undefined) {
        return constructor[Symbol.hasInstance](object);
    }

    // protoType chainを参照する
    let p = constructor.prototype;

    // objectのprotoTypeを順にたどり一致するか、取得できなくなるまで続ける
    while(object) {
        object = Object.getPrototypeOf(object);

        if (object === p) return true;
    }

    return false;
}
