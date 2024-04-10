/**
 * 方針
 * - クラスメソッドとして実行した場合は1を返す
 * - インスタンスメソッドとして実行した場合は2を返す
 * - C.C.methodはクラスCの静的フィールドCのもつmethod()
 * - new C.C()はC.Cをコンストラクタとして呼び出したってコト？
 * - new C().C.method()はCのインスタンスのフィールドCの持つメソッド
 */
class C {
    constructor() {
        this.C = {
            method () {
                return 5;
            }
        }
    }



    get C() {
        return {
            method () {
                return 3;
            }
        }
    }

    static method() {
        return 1;
    }

    method() {
        return 2;
    }

}



console.log(C.method());
console.log(new C().method());
console.log(C.C.method());
console.log(new C.C())

console.log(new C().C.method());