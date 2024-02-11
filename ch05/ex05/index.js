/**
 * Objectの要素のうち値が偶数のもののみを返す
 * - 配列およびObjectに対しての未動作する、それ以外に対しては{}を返す
 * - TODO 入れ子やObjectと配列の複合に関しては値の如何にかかわらず除外する
 * @param {*} obj 
 * @returns 
 */
export let getEvenProperties = function (obj) {
    // Objectじゃなければreturn {}
    obj = (typeof obj === 'object' && obj) || {};

    // 配列の場合
    if (Array.isArray(obj)) {
        return obj.filter(v => isEvenValue(v));
    }

    // Objectの場合
    for (let [k, v] of Object.entries(obj)) {
        if (!isEvenValue(v)) {
            delete obj[k];
        }
    }

    return obj;
}

/**
 * 値の偶数判定
 * @param {*} v 
 * @returns 偶数か否か
 */
let isEvenValue = function (v) {
    return (typeof v === 'number') && (v % 2 === 0); 
}
