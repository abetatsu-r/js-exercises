import { listupPropertyName } from "./index.js";

function listupPropertyNameTest(data, expected) {
    return [data, expected];
}

// data set

// case 1: 列挙不可を含むすべての独自プロパティ
let obj1 = {x :1}
Object.defineProperty(obj1, 'y', {
    value: 3,
    enumerable: false
})

// case 2: 数字と文字列の列挙不可を含む独自プロパティ
let obj2 = {x: 1, '0': 0}
Object.defineProperty(obj2, 'y', {
    value: 3,
    enumerable: false
})
Object.defineProperty(obj2, '1', {
    value: 1,
    enumerable: false
})

// case 3: 数字と文字列とSymbolの列挙不可を含む独自プロパティ
let obj3 = Object.assign({}, obj2);
Object.defineProperty(obj3, 'y', {
    value: 3,
    enumerable: false
})
Object.defineProperty(obj3, '1', {
    value: 1,
    enumerable: false
})
let symbol_enum = Symbol('enum_symbol');
obj3[symbol_enum] = 'enumSymbol'
let symbol_notenum = Symbol('not enum symbol');
obj3[symbol_notenum] = 'enonEnumSymbol'
Object.defineProperty(obj3, symbol_notenum, {
    enumerable: false
})

// case 4: case3に加えて継承したプロパティをもつ
let obj4 = Object.create(obj3); // 列挙可能プロパティとしてx, 0, enum_symbolを継承
obj4.z = 'z';
obj4[2] = 2;

// case 5: 列挙可能な継承プロパティを列挙不可なenumで上書きしている場合にそのプロパティ名を取得できる
let obj5_proto = Object.assign({}, obj3);
obj5_proto.updatedToNonEnum = 'before';
let obj5 = Object.create(obj5_proto);
Object.defineProperty(obj5, 'updatedToNonEnum', {
    value: 'after',
    enumerable: false
})


// case6: 多重継承した列挙可能プロパティが出力されること
let obj6_proto = Object.create(obj3); // obj3から列挙可能プロパティとしてx, 0, enum_symbolを継承
obj6_proto.p_x = 'p_x';
obj6_proto[6] = 6;
Object.defineProperty(obj6_proto, 'notEnum', {
    value: 'not print',
    enumerable: false
})
let symbol_proto_obj6 = Symbol('symbol_proto_obj6');
obj6_proto[symbol_proto_obj6] = 'proto_symbol';

let obj6 = Object.create(obj6_proto); // p_x, 6, symbol_proto_obj6を列挙可能プロパティとして継承
obj6.a = 'a';
obj6[7] = 7;

/**
 * 配列の中身が同じか判定する(順不同)
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
let compareArrays = function(arr1, arr2) {
    console.log(arr1);

    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;

}

test.each([
    listupPropertyNameTest(obj1, ['x', 'y']),
    listupPropertyNameTest(obj2, ['0', '1', 'x', 'y']),
    listupPropertyNameTest(obj3, ['0', '1', 'x', 'y', symbol_enum, symbol_notenum]),
    listupPropertyNameTest(obj4, ['2', 'z', '0', 'x', symbol_enum]),
    listupPropertyNameTest(obj5, ['updatedToNonEnum', '0', 'x', symbol_enum]),
    listupPropertyNameTest(obj6, ['x', '0', symbol_enum, 'p_x', '6', symbol_proto_obj6, 'a', '7'])
])("listupPropertyName(%p) => %p", (data, expected) => {
    expect(compareArrays(listupPropertyName(data), expected)).toBe(true);
})
