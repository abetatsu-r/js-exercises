/**
 * 方針
 * - クラスメソッドとして実行した場合は1を返す
 * - インスタンスメソッドとして実行した場合は2を返す
 * - C.C.methodはクラスCの静的フィールドCのもつmethod()
 * - new C.C()はC.Cをコンストラクタとして呼び出したってコト？
 * - new C().C.method()はCのインスタンスのフィールドCの持つメソッド
 * - new new C().C()はcのインスタンスのC()をコンストラクタとして呼び出したインスタンスのメソッド
 */
export class C {
  constructor() {
    // 6との両立が無理
    /** 
        this.C = {
            method () {
                return 5;
            }
        }
        */
    this.C = function () {
      this.method = function () {
        return 6;
      };
    };
  }

  // 4との両立が無理
  /** 
    static C = {
        method() {return 3}
    }
    */

  static C = function () {
    //if(new.target) return {method() {return 3}};
    this.method = function () {
      return 4;
    };
  };

  static method() {
    return 1;
  }

  method() {
    return 2;
  }
}

C.C.method = function () {
  return 3;
};

console.log(C.method());
console.log(new C().method());
//console.log(C.C.method());
console.log(new C.C().method());
//console.log(new C().C.method());
console.log(new new C().C().method());
